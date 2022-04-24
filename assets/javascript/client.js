// Declaring const's for dark mode switch...

const button = document.querySelector('.drk-btn');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const main = document.querySelector('.grid-container');
const spotify = document.querySelectorAll('.fa-spotify');
const itunes = document.querySelectorAll('.fa-itunes');
const cards = document.querySelectorAll('.card');
const fb = document.querySelector('.fa-facebook-square');
const pinterest = document.querySelector('.fa-pinterest');


// Dark mode toggle

button.addEventListener('click', function () {
  nav.classList.toggle('darkmode');
  header.classList.toggle('darkmode');
  main.classList.toggle('darkmode');
  fb.classList.toggle('darkmode');
  pinterest.classList.toggle('darkmode')
  spotify.forEach(spotify => spotify.classList.toggle('darkmode'));
  itunes.forEach(itunes => itunes.classList.toggle('darkmode'));
  cards.forEach(card => card.classList.toggle('darkmode'));
});
