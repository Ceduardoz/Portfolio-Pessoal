//      INICIAR A PAGINA
const frasePrincipal = document.querySelector('.frasePrincipal');
const avatar = document.querySelector('.avatar');

frasePrincipal.classList.add('show');
frasePrincipal.style.transition = 'all 1s ease';

setTimeout(() => {
    avatar.style.transition = 'all 1s ease';
    avatar.classList.add('show');
}, 1000);

//            SCROLL
const boxes = document.querySelectorAll('.box');
let timeout;

window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;

            if (boxTop < triggerBottom) {
                box.classList.add('show');
                box.style.transition = 'all 1s ease';
            } else {
                box.classList.remove('show');
            }
        });
    }, 20);
});

//          MODO CLARO/ESCURO
const btnDarkMode = document.querySelector('.navbar button');
const body = document.body;
const logoImg = document.querySelector('.logo');

btnDarkMode.addEventListener('click', () => {
    body.classList.toggle('modoClaro');

    const icon = btnDarkMode.querySelector('i');

    if (body.classList.contains('modoClaro')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#31c79c';
        logoImg.src = '/assets/img/logoLight.png';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = '#8AFAD8';
        logoImg.src = 'assets/img/logoDark.png';
    }

});


