console.log('Hello World!');
// Código JS para animação do menu responsivo
const menu = document.querySelector('.menu');
const hamButton = document.querySelector('.ham-button');

hamButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});
