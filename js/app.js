const menu = document.querySelector('.menu');
const slideNav = document.querySelector('ul');
const lines = document.querySelectorAll('.line');
const body = document.querySelector('body');
const html = document.querySelector('html');
const links = slideNav.querySelectorAll('a');

/* Kullanıcı linklerden birine tıklayıp sayfayı yenilerse sayfanın otomatik hep aynı yere dönmesini engellemek için */
window.scrollTo(0, 0);

let menuOff = true;

function openNav() {
    html.classList.add('body-fixed');
    body.classList.add('body-fixed');
    slideNav.style.transform = `translateX(-100%)`;
    lines[0].style.transform = 'rotateZ(45deg) translateY(420%)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'rotateZ(-45deg) translateY(-420%)';
}

function closeNav() {
    html.classList.remove('body-fixed');
    body.classList.remove('body-fixed');
    slideNav.style.transform = 'translateX(0%)';
    lines[0].style.transform = 'rotateZ(0) translateY(0)';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'rotateZ(0) translateY(0)';
}

menu.addEventListener('click', function () {
    if (menuOff === true) {
        openNav();
        menuOff = false;
    } else {
        closeNav();
        menuOff = true;
    }
})

links.forEach(link => {
    link.addEventListener('click', function () {
        closeNav();
        menuOff = true;
    })
})