// supabase.js – Verbindung zur Supabase-Datenbank herstellen

import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const SUPABASE_URL = 'https://ghfzdgaunxblpudkmxmy.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZnpkZ2F1bnhibHB1ZGtteG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MDI5NTksImV4cCI6MjA2NjI3ODk1OX0.J8ni4SszaI33ljthdEjqXf8ZKFCs4uWnRZZDyU0IlUU'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
