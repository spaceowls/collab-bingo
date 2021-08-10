import http from 'http'
import handler from 'serve-handler'
import { join, dirname } from 'path'
import { accessSync, readFileSync } from 'fs'
import ejs from 'ejs'
import WebSocket, { WebSocketServer } from 'ws';
import open from 'open'
import { codigo } from './reload-client.js';

export default class Servidor {
    constructor(pathPastaServir, portaServidor, portaWs) {
        this.pathPastaServir = pathPastaServir

        this.servidorHTTP = http.createServer(this.handleHttpRequest)
        this.servidorHTTP.listen(portaServidor)

        const conexaoWs = new WebSocketServer({port: portaWs})
        this.conexaoWs = conexaoWs

        open('http://localhost:' + portaServidor)

    }

    //precisa ser a porra de uma arrow function para o this referir a classe servidor
    handleHttpRequest = (req, res) => {
        const urlPath = req.url

        const extensao = urlPath.split('.')[1]

        //se o arquivo pedido for um ejs, vai compilar ele antes de mandar
        if (extensao === 'ejs') {
            const pathRequisitado = join(this.pathPastaServir, urlPath)
            const caminhoAbsolutoRequest = dirname(pathRequisitado)

            try {
                //testa se o ejs existe
                accessSync(pathRequisitado)
            } catch {
                //se o arquivo requisitado nao existir retorna o erro bonito da biblioteca
                return handler(req, res, {
                    'public' : this.pathPastaServir
                })
            }

            //compila o ejs
            const ejsRaw = readFileSync(pathRequisitado, 'utf8')
            let resposta
            try{
                const ejsCompilado = ejs.render(ejsRaw, null, {
                    'views':[caminhoAbsolutoRequest]
                })
                resposta = ejsCompilado + codigo
            } catch(err) {
                console.log("#######ERRO NA COMPILACAO DO EJS#######")
                console.log(err)
                resposta = '<p>Erro no EJS</p>' + codigo
            }

            res.end(resposta)
            return
        }

        //caso o arquivo nao seja um ejs, deixa essa biblioteca fazer a resposta
        return handler(req, res, {
            'public' : this.pathPastaServir,
        })
    }

    recarregarPagina() {
        this.conexaoWs.clients.forEach((client) => client.send('reload'))
    }
}
