import { createNewPost, logout, getUser } from '../fetch-utils.js';

// DOM ELEMENTS
// home button
const homeButton = document.getElementById('home-button');
//auth button
const authButton = document.getElementById('auth-button');
// create post button
const form = document.getElementById('create-post');

// return user to home page
homeButton.addEventListener('click', () => {
    location.replace('/');
});

// button functions
window.addEventListener('load', async () => {
    const user = await getUser();

    // check for auth user
    if (user) {
        authButton.addEventListener('click', logout);
        // change button to Logout
        authButton.textContent = 'Logout';
    } else {
        //login/auth button eventListener
        authButton.addEventListener('click', () => {
            location.replace('/auth');
        });
        authButton.textContent = 'Login';
    }
});

// form to create a post
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    //create and object and call it newPost
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contacts: data.get('contacts'),
    };

    const response = await createNewPost(newPost);

    location.replace('/');
});
