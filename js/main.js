const menuBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

});