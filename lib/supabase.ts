import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Variáveis de ambiente do Supabase não encontradas.');
}

// Client para uso no Front-End
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função auxiliar para ter um client com permissões completas (bypass RLS)
// Usar APENAS em rotas de API (Backend), NUNCA no frontend.
export const getServiceSupabase = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  return createClient(supabaseUrl, serviceKey);
};
