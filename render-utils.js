// render post on main page
export function renderPost(post) {
    // div container for each post
    const div = document.createElement('div');
    div.classList.add('post-container');

    // ELEMENTS
    // title
    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;

    // description
    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = post.description;

    // contacts
    const contactsEl = document.createElement('p');
    contactsEl.textContent = post.contacts;

    // append elements to div
    div.append(titleEl, descriptionEl, contactsEl);

    // return div
    return div;
}
