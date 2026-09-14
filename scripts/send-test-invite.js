// require dotenv removed
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL ou Key não encontrados no .env.local');
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

async function sendInvite() {
  const email = process.argv[2];
  if (!email) {
    console.error('Por favor, informe o e-mail como argumento.');
    process.exit(1);
  }

  console.log(`Disparando convite para: ${email}`);
  
  const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email);

  if (error) {
    console.error('Erro ao enviar convite:', error.message);
    process.exit(1);
  }

  console.log('Convite enviado com sucesso para', email);
}

sendInvite();
