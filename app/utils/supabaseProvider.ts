import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mbmrpbolsghkbcdcgjvj.supabase.co' || '';
const anonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibXJwYm9sc2doa2JjZGNnanZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNDUwNDIsImV4cCI6MTk4MzgyMTA0Mn0.ZX9kS9p5I_-ERvb8yuie1lUmI2n9MdUS2uS343jaGTk' ||
  '';

const supabase = createClient(supabaseUrl, anonKey);

export default supabase;
