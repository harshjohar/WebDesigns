const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navbar');
let a =10;
hamburger.addEventListener('click', ()=> {
    navUL.classList.toggle('show');
})