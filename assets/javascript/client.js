// Declaring const's for dark mode switch...

const button = document.querySelector('.drk-btn')
const card = document.querySelector('.card')
const nav = document.querySelector('nav')
const header = document.querySelector('header')
const main = document.querySelector('.grid-container')

button.addEventListener('click', function(){

card.classList.toggle('darkmode')
nav.classList.toggle('darkmode')
header.classList.toggle('darkmode')
main.classList.toggle('darkmode')
});


