/* Imports */
import { fetchPosts, getUser, logout } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const bulletinBoard = document.getElementById('bulletin-board');
//auth button
const authButton = document.getElementById('auth-button');
//create button
const createButton = document.getElementById('create');

/* State */

/* Events */
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

    //create button eventListener
    createButton.addEventListener('click', () => {
        location.replace('/create');
    });

    // getting posts from fetch-utils
    const posts = await fetchPosts();

    // display - loop, render, append
    for (let post of posts) {
        const postEl = renderPost(post);
        bulletinBoard.append(postEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
