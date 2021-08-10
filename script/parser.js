import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { accessSync } from 'fs';


const pastaAtual = dirname(fileURLToPath(import.meta.url))

const pastaSrc = join(pastaAtual, '../src')
if(!testarExistencia(pastaSrc)){
    throw 'pasta para observar nao existe'
}

const pastaScss = join(pastaSrc, 'sass/main.scss')
if(!testarExistencia(pastaScss)){
    console.log(pastaScss)
    throw 'pasta do scss nao existe'
}

export {
    pastaSrc,
    pastaScss
}

function testarExistencia(path){
    try {
        accessSync(path)
        return true
    } catch {
        return false
    }
}
