# Week 03 From Scratch Bulletin Board

## Project Planning

### HTML

-   landing page: AUTH
    -   sign up form with text inputs and submit button
    -   sign in form with text inputs and submit button
-   home page
    -   link to CREATE page
    -   button to sign out
-   create page
    -   form to input post information

### Events

-   landing page:
    -   form submits
-   home page:
    -   window load event
-   create page:
    -   form submit

## Workflow

### Slice 1 - Sign Up

        - create auth folder with index.html & auth.js
        - add signUpUser func to fetch-utils.js
        - add signUpForm.eventListener to auth.js

### Slice 2 - Sign in

### Slice 3 - Redirects (including signing out)

### Slice 4 - Create Page

## Rubric

### Home Page Requirements

-   [] Styled list of posts 3
-   [] Header with links (or buttons) to auth and create pages 1
-   [] ASYNC: fetchPosts() : return array of posts from supabase 2

### Auth Page Requirements

-   [] Allows users to login or sign up for the application 4
-   [] ASYNC: signUpUser - calls supabase signUp method and returns user 1
-   [] ASYNC: signInUser - calls supabase signIn method and returns user 1

### Create Page Requirements

-   [] Displays a form for users to add post details 1
-   [] Can only be loaded when logged in, otherwise redirects to the auth page 2
-   [] Header with links (or buttons) to home 1
-   [] Creates a new row in the database on form submit and redirects back to the home page 2
-   [] ASYNC: createPost() creates a new row in the database 2
