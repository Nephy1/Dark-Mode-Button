// Declaring const's for dark mode switch...

const button = document.querySelector('.drk-btn');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const main = document.querySelector('.grid-container');
const spotify = document.querySelector('.fa-spotify');
const itunes = document.querySelector('.fa-itunes');
const card = document.querySelector('.card');


// Dark mode toggle

button.addEventListener('click', function(){
nav.classList.toggle('darkmode');
header.classList.toggle('darkmode');
main.classList.toggle('darkmode');
spotify.classList.toggle('darkmode');
itunes.classList.toggle('darkmode');
card.classList.toggle('darkmode')
});
