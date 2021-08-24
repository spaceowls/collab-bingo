const btnBingo = document.querySelector('.btn-padrao');
const abrirModal = document.querySelector('.fundo-modal');

function abrirModalNaTela() {
    if(abrirModal.classList.contains('fundo-modal')){
        abrirModal.style.display = 'flex';
        console.log('Modal');
    }
}

btnBingo.addEventListener('click', function(){
    abrirModalNaTela()
});

