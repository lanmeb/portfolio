const botaoMenu = document.querySelector('.botao__menu')
const menuMobile = document.querySelector('.menuMobile')
let isMenuOpen = false

botaoMenu.addEventListener('click', function(){

    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')
    
    isMenuOpen = !isMenuOpen

})


