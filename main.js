const botaomenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.menu_lateral')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral-ativo')
})