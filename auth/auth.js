import { redirectIfLoggedIn, signUpUser, signInUser } from '../fetch-utils.js';

// Get DOM Elements
const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

// events

// sign up
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

// sign in
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
