const button = document.querySelector('[data-button]')
const menu = document.querySelector('.mobile')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const main = document.querySelector('main')
const link = document.querySelector('.content a')
function ativar(e){
    e.preventDefault()
    menu.classList.toggle('ativo')
    button.classList.toggle('rotate')
}

function backgroundB(e){
    e.preventDefault()
    body.classList.toggle('preto')

}
function backgroundF(e){
    e.preventDefault()
    footer.classList.toggle('scroll')

}
function backgroundL(e){
    e.preventDefault()
    link.classList.toggle('scroll')

}
function mainB(e){
    e.preventDefault()
    main.classList.toggle('preto')

}
button.addEventListener('click',ativar)
button.addEventListener('click',backgroundF)
button.addEventListener('click',backgroundB)
button.addEventListener('click',mainB)
button.addEventListener('click',backgroundL)

