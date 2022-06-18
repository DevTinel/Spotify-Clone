const button = document.querySelector('[data-button]')
const menu = document.querySelector('.mobile')

function ativar(e){
    e.preventDefault()
    menu.classList.toggle('ativo')
}

button.addEventListener('click',ativar)