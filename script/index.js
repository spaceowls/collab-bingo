import {pastaSrc, pastaScss} from './parser.js'
import Servidor from './server.js'
import inicarWatcher from './watcher.js'

const PORTA_SERVIDOR = 8080
const PORTA_WS = 7777

let servidor = new Servidor(pastaSrc, PORTA_SERVIDOR, PORTA_WS)

inicarWatcher(pastaSrc, pastaScss, servidor.recarregarPagina.bind(servidor))

