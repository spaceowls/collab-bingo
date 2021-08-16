const btnAlteraImagem = document.querySelector('.edit-perfil')

function alterarImagem(objeto, caminhoNovaImagem){//Recebemos dois valores por parâmetro.
    document.getElementById(objeto).src = caminhoNovaImagem; 
    console.log('cricleu')
}

btnAlteraImagem.addEventListener('click', ()=> {
    alterarImagem(objeto, caminhoNovaImagem)
    
})