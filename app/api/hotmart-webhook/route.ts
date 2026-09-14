import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Inicializa o cliente Supabase de Admin (Service Role)
// IMPORTANTE: Isso deve ser usado APENAS em rotas de API seguras, nunca no cliente.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const hottok = payload.hottok || request.headers.get('x-hottok');

    // 1. Validação de Segurança (Hottok)
    const envHottok = process.env.HOTMART_HOTTOK;
    
    // Se o Hottok estiver configurado no .env, nós o validamos rigorosamente.
    if (envHottok && hottok !== envHottok) {
      console.error('Tentativa de acesso negada: Hottok inválido.', hottok);
      return NextResponse.json({ error: 'Unauthorized: Invalid Hottok' }, { status: 401 });
    }

    // 2. Verifica se é o evento correto (Compra Aprovada)
    // A Hotmart envia "PURCHASE_APPROVED" na v2 ou "APPROVED" na v1
    const isApproved = payload.event === 'PURCHASE_APPROVED' || payload.status === 'APPROVED';

    if (!isApproved) {
      console.log('Evento ignorado:', payload.event || payload.status);
      return NextResponse.json({ success: true, message: 'Event ignored' });
    }

    // 3. Extrai o e-mail do comprador
    // Hotmart v2 guarda em data.buyer.email, v1 guarda direto na raiz do body (email)
    const buyerEmail = payload?.data?.buyer?.email || payload?.email;

    if (!buyerEmail) {
      return NextResponse.json({ error: 'Bad Request: Email not found in payload' }, { status: 400 });
    }

    // 4. Cria a conta no Supabase usando Invite (Link Mágico)
    console.log(`Disparando convite para: ${buyerEmail}`);
    
    const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(buyerEmail);

    if (error) {
      console.error('Erro detalhado do Supabase:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
      return NextResponse.json({ error: error.message || 'Erro ao enviar convite' }, { status: 500 });
    }

    // Tudo ocorreu com sucesso! A conta foi criada e o e-mail de Magic Link foi disparado.
    return NextResponse.json({ success: true, message: 'User invited successfully' });

  } catch (error) {
    console.error('Erro no processamento do Webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
