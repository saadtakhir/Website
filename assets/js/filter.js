const collapse = document.querySelector('.collapse')
const openMenu = document.querySelector('.navbar-toggler')
const closeMenu = document.querySelector('.close-menu')

openMenu.onclick = function(){
    collapse.classList.add('show')
}
closeMenu.onclick = function(){
    collapse.classList.remove('show')
}

