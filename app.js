/* Imports */
import { fetchPosts } from './fetch-utils.js';
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
    const posts = await fetchPosts();

    // display - loop, render, append
    for (let post of posts) {
        const postEl = renderPost(post);
        bulletinBoard.append(postEl);
    }
});

//login/auth button eventListener
authButton.addEventListener('click', () => {
    location.replace('/auth');
});
//create button eventListener
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
