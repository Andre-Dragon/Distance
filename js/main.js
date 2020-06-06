const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-sidebar');
const container = document.querySelector('.container');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

container.addEventListener('click', event => {
        const target = event.target;
        if (!target.closest('.menu-sidebar')) {
            menu.classList.remove('openMenu');
            hamburger.classList.remove('open');
        }
});