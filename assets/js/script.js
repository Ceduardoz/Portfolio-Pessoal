//      INICIAR A PAGINA
const frasePrincipal = document.querySelector('.firstPhrase');
const avatar = document.querySelector('.avatar');

frasePrincipal.classList.add('show');

setTimeout(() => {
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
            } else {
                box.classList.remove('show');
            }
        });
    }, 0);
});

//          MODO CLARO/ESCURO
const btnDarkMode = document.querySelector('.navbar button');
const body = document.body;
const logoImg = document.querySelector('.logo');

btnDarkMode.addEventListener('click', () => {
    body.classList.toggle('whiteMode');
    const icon = btnDarkMode.querySelector('i');

    if (body.classList.contains('whiteMode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#31c79c';
        logoImg.src = '/assets/img/logoLight.png';
        salvarTema('white');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = '#8AFAD8';
        logoImg.src = 'assets/img/logoDark.png';
        salvarTema('dark');
    }
});

//      LOCAL STORAGE JSON

//          SALVAR TEMA
function salvarTema(modo){
    const dados = {tema: modo};
    localStorage.setItem('preferencias', JSON.stringify(dados));
}
//          CARREGAR TEMA
function carregarTema(){
    const dadosSalvos = localStorage.getItem('preferencias');
    if(dadosSalvos) {
        return JSON.parse(dadosSalvos).tema;
    }
    return null;
}

window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = carregarTema();
    const icon = btnDarkMode.querySelector('i');
    if(temaSalvo === 'white') {
        body.classList.add('whiteMode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#31c79c';
        logoImg.src = 'assets/img/logoLight.png';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = '#8AFAD8';
        logoImg.src = 'assets/img/logoDark.png';
    }
});