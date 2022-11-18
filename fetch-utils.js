const SUPABASE_URL = 'https://qibydbafeplthyrhkgog.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYnlkYmFmZXBsdGh5cmhrZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwOTIsImV4cCI6MTk4MzY4NDA5Mn0.NrtQcuaIUkk_9z8xEvXMdOg-GqBQaeDdi3tGUQcDCQc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// policy for selecting data
export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}

// function for sign up
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

// verify user info in database
export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

// redirect for successful login
export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/');
    }
}
