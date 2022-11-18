import { createNewPost } from '../fetch-utils.js';

const form = document.getElementById('create-post');

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
    console.log(response);
});
