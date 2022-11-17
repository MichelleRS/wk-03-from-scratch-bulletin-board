const SUPABASE_URL = 'https://qibydbafeplthyrhkgog.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYnlkYmFmZXBsdGh5cmhrZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwOTIsImV4cCI6MTk4MzY4NDA5Mn0.NrtQcuaIUkk_9z8xEvXMdOg-GqBQaeDdi3tGUQcDCQc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// policy for selecting data
export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}
