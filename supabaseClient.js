// supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyumbriutzlqapvpeynr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dW1icml1dHpscWFwdnBleW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzOTYyMzcsImV4cCI6MjAyNzk3MjIzN30.QWX7s_oUdr4qvlkjV-v0fqNFqVGjsVdg-qjMTOdJbvU';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
