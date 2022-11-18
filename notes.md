# Week 03, Block B Notes

Authentication Tab (people)
IMPORTANT!!

-   Authentication > Providers > email tab (only have first toggle on - enable email provider)

---

Connect to Supabase:

-   Create fetch-utils.js and add URL and KEY
-   in index.html, add script tag before js

---

SLICE 1 - Sign-Up

-   index.html
-   in fetch-utils.js:
    -   aysnc/await function for signUpUser
-   in app.js:
    -   get sign-up DOM element

### fetch-utils

```
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({email, password});

    return response.user;
}

```

### app.js

```
// DOM elements
const signUpForm = document.getElementById('sign-up');

// events
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // form data object - takes in our form for signUp
    const data = new FormData(signUpForm)
    // look at that form and get the email and password
    const user = await singUpUser(data.get('email')), data.get('password');
});

```

> FormData? - Brenley / I think the new Formdata() function is a special Javascript function that gets all the data from an HTML `form` and returns all the different data inputs as one object, eg. { email="email@example.org", username="username", ... } - Allie

IMPORTANT
`data.get('value')` - value has to match up with the name attribute in the input element in HTML.

_Pause to check console_

Open console and check network tab to see if there is a connection

---

## REDIRECT

_originally listed as SLICE 3 in README, but changed to SLICE 2 and kind of blended with sign up_

After signing up, we want to redirect them to another page

-   Create new folder with html and js file for other page

Worfklow:

-   html - create actual elements
-   fetch-utils - create fetch functionality
-   app.js files: utilize both html and fetch

When will we want to redirect a user?

-   When they sign up or sign in
-   log out
-   try to access a page further in without being logged in

---

### fetch-utils.js

```
// place above signUpUser()

export function getUser() {
    return client.auth.session() && client.auth.session().user
}


// when a user tries to visit a page that calls this function, automatically redirect the user away from the login page IF they are already logged in

export async function redirectIfLoggedIn() {
    // call getUser function
    const user = getUser();

    // if user doesn't exist, send to other page
    if(!user) location.replace('/other-page');

    // get user and check if they exist

}
```

### app.js

```

redirectIfLoggedIn();

```

### Add on to existing fetch-utils

```
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({email, password});

    if (response.user) {
        return response.user;
    } else {
    console.error(response.error);
}

```

### fetch-utils

```
// automatically redirect user back to the login page if they are not logged in
export async
// put this below getUser()

export function checkAuth() {
    const user = getUser();

    // if user doesn't exist, send to home page
    if (!user) location.replace('/');
}

```

### fetch-utils.js below singUpUser

```
// function for button click on logging out to change location to home page
export async function logOut() {
    await client.auth.signOut();

    return (window.location.href = '/');

}
```

### app.js

```
// add to signUpForm.addEventListener below const:

    if (user) {
        location.replace('other-page');
    }
});
```

### other-page.js

```
// imports - checkAuth, logout from fetch-utils

// call checkAuth() to make sure being on this page has been authorized
checkAuth()

// DOM elements
const logOutButton = document.getElementById('logout');

// events
logOutButton.addEventListener('click', async () => {
    await logout();
})

```

### fetch-utils

```
export async function signInUser(email, password) {
    const response = await client.auth.signIn({email, password});

    return response.user;
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}
```

### app.js

```
duplicate event for sign in form but call singInUser instead
```

---

To see the token in console:
Application > Local Storage > one underneath it

## SLICE 4 - Create

-   Add new folder for create with index.html and create.js and change css and js links

create index.html

```
<form id="create-post">
    <label>
    Title <input type="text" name="title" id="title"/>
    </label>

        <label>
    Description <input type="text" name="title" id="description"/>
    </label>

        <label>
    Contact <input type="text" name="title" id="contact"/>
    </label>

    <button type="submit">Submit</button>
</form>

```

---

Go to supabase and create a table for the posts to display

Columns are same name as inputs (title, description, and contact)

### fetch-utils.js

```
// fetch all posts - do next
export async function fetchPosts() {
    cost response = await client.from('demo_posts').select('*');

    return response.data;
}

// create post function - do this one first
export async function createNewPost(post) {
    const response = await client.from('demo_posts').insert(post);

    // if/else for error handling
    if (response.data) {
        return response.data
    } else {
        console.error(response.error);
    }
}


```

Notes for above code:
'demo_posts' = table name
insert is same as creating something

### create.js

```
// grab create-post id from index
// DOM
const form = document.getElementById('create-post');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    //
    const data = new FormData(form);
    // create an object and call it newPost
    const newPost = {
        title:data.get('title'),
        description:data.get('description'),
        contact:(data.get('contact')),
    };

    const response = await createNewPost(newPost);
    console.log(response);
});

```

IMPORTANT - inputs in HTML form should have names that match up with names above

> Why are we creating an object? - Aaron / We used .select to grab information from Supabase. Now we want to create the information and get it back. So we create the object in event listener - Madden

CONSOLE.LOG - can check that it's in console, then check in Supabase

---

Add fetch to other-page.js

```
window.AddEventListener('load', async () => {
    const posts = await fetchPosts();
    console.log(posts, 'posts');
    // loop render and append
})

```

---

add a link to other-page to go to create page

No RLS - nothing limiting a users ability to create or see posts

Row level security - what is allowed to happen with each row.

---

### In Supabase

    *Don't have RLS enabled unless you have a policy*

Policies to make for this project:

Policy - You have to be logged in to create something

    - Click on RLS is not enabled > policies > create policy > get started quickly > enable insert access for authenticated users only > Use this template > insert / target authenticated / check expression true > review > save policy > enable RLS

Another policy for allowing people to read the posts: - Similar actions as above: Enable read(same as select) > allowed operation = select

---

Password has to be 6 characters long

---

"CRUD Routes"
Create
Read
Update
Delete

---

Julie example in response to Austin asking about response.data:

```
response.data

let myObj = {name: 'Benny', age: 7}

myObj.data = 42

console.log(myObj);

{name: 'Benny', age: 7, data: 42}

}
```
