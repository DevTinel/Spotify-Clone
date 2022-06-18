const button = document.querySelector('[data-button]')
const menu = document.querySelector('.mobile')
const body = document.querySelector('body')
function ativar(e){
    e.preventDefault()
    menu.classList.toggle('ativo')
    button.classList.toggle('rotate')
}


button.addEventListener('click',ativar)

