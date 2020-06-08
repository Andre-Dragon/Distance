'use strict';

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu-sidebar'),
    container = document.querySelector('.container'),
    postShare = document.querySelector('.post-share'),
    shareButton = document.querySelector('.share-button');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

shareButton.addEventListener('click', () => {
    postShare.classList.toggle('open-share');    
});


container.addEventListener('click', event => {
    const target = event.target;
        if (!target.closest('.menu-sidebar')) {
            menu.classList.remove('openMenu');
            hamburger.classList.remove('open');
        }
});
