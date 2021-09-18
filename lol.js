//oque esse codigo faz, quando ele receber a notificacao que alguem fez pontuacao
//ele vai diminuir o quanto de pedras falta pra ele bater

//o nomeJogador e o nome que ele vai procurar no html pra diminuir o numero
socket.on('pontuacaoDeAlguem', (nomeJogador, room) => {
    if(room !== '<% sala %>'){
        return
    }

    const divsNome = Array.from(document.getElementsByClassName('modal-container-list__users-names'))

    const nomeDoJogador = divsNome.find(elemento => {
        if(!(elemento instanceof HTMLElement)) return false
        return elemento.innerHTML === nomeJogador
    })

    //caso o div do jogador nao seja encontrada
    //nao eh pra isso acontecer, sla
    if(!nomeDoJogador) {
        console.log(`o jogador ${nomeJogador} nao foi encontrado pohaaaa`)
        return
    }

    //e para pegar o span aq, ja que ele eh irmao do h2
    const pontuacaoDoJogador = nomeDoJogador.nextElementSibling

    //ja isso daqui eh caso nao ache o elemento span irmao do h2 contendo o nome
    if(!pontuacaoDoJogador){
        console.log(`nao tem a caralha do span do ${nomeJogador}`)
        return
    }

    pontuacaoDoJogador.innerHTML = pontuacaoDoJogador.innerHTML - 1

    //pronto, chegou no final, acho q ja terminei
})
