import { NextResponse } from 'next/server';

export async function GET() {
  // Rota de debug desativada em produção por segurança
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'OK' : 'MISSING',
    anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'OK' : 'MISSING',
    service: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'OK' : 'MISSING',
  });
}
