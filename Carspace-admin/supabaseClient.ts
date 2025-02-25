import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eilnzicwovojyqjabuze.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpbG56aWN3b3ZvanlxamFidXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNzUwODAsImV4cCI6MjA1NTk1MTA4MH0.pVtMG6LDV3z0XG1-R5s5QPR8KzKfJBo-eaboxYsaSOE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
