// Dark theme
const themeButton = document.querySelector(".theme-button");
const themeContainer = document.querySelector(".theme-container");
const title = document.querySelector(".title");
const commentTitle = document.querySelector(".comment-title")
const commentFieldDark = document.querySelector(".comment-field")
const siteBody = document.querySelector("body");
const forumContainer = document.querySelector(".forum-container");
const userComment = document.querySelector(".user-comment");

themeButton.addEventListener('click', darkTheme);
function darkTheme() {
    themeContainer.classList.toggle("dark-theme");
    siteBody.classList.toggle("dark-theme");
    title.classList.toggle("dark-theme");
    commentForm.classList.toggle("dark-theme");
    commentTitle.classList.toggle("dark-theme");
    commentFieldDark.classList.toggle("dark-theme");
    userComment.classList.toggle("dark-theme");
    forumContainer.classList.toggle("dark-theme");
};


// Scroll
const nav = document.querySelector(".navigation");
const upButton = document.querySelector(".up-button");

window.addEventListener('scroll', navAnim);
function navAnim() {
    if(pageYOffset > 200){
        nav.classList.add("shrink");
        upButton.classList.add("shown");
    };
    if(pageYOffset < 200){
        nav.classList.remove("shrink");
        upButton.classList.remove("shown");
    };
};

upButton.addEventListener('click', upButtonFunc);
function upButtonFunc() {
    scrollTo(0,0);
};


// Cookies
const cookiesAgreement = document.querySelector(".cookies-agreement");
const cookiesButton = document.querySelector(".cookies-button");

// let overlay = document.createElement('div');
// overlay.classList.add('overlay');
// document.body.appendChild(overlay);

cookiesButton.addEventListener('click', cookiesFunc);
function cookiesFunc() {
    cookiesAgreement.classList.add("cookies-agreement-closed");
};


// Likes
const heart = document.querySelector(".heart");
const likeNumber = document.querySelector(".likes-number");
heart.addEventListener('click', heartFunc);
function heartFunc() {
    heart.classList.toggle("added");
    if(heart.classList.contains("added")){
        likeNumber.textContent = Number(likeNumber.textContent) + Number(1);
    } else {
        likeNumber.textContent = likeNumber.textContent - 1;
    };
};


// Comments
const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('.comment-list');
const submitButton = document.querySelector('.submit-button');

commentForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const commentField = evt.target.commentField;
    const commentText = commentField.value.trim();

    const newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = commentText;
    commentList.append(newComment);
    commentField.value = '';
});