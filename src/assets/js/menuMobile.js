const menu = document.querySelector('.btn-menu');
const closeMenu = document.querySelector('.close-menu');
const menuTela = document.querySelector('.menu-mobile')

function abrirMenu() {
    if(menu.classList.contains('btn-menu')){
        menuTela.style.display = 'flex';
    }
}

function fecharMenu(){
    if(closeMenu.classList.contains('close-menu')){
        menuTela.style.display = 'none';
    }
}

menu.addEventListener('click', ()=> {
    abrirMenu()
})
closeMenu.addEventListener('click', ()=> {
    fecharMenu()
})