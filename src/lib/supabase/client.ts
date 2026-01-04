import { createBrowserClient } from '@supabase/ssr'
import { SupabaseClient } from '@supabase/supabase-js'

// Mock Supabase client for static landing page (when no env vars are set)
class MockSupabaseClient {
  auth = {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithOAuth: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
  }
}

export function createClient(): SupabaseClient | any {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // For static landing page, return mock client if env vars are not set
  if (!url || !key) {
    return new MockSupabaseClient() as any;
  }

  return createBrowserClient(url, key);
}
