import http from 'http'
import handler from 'serve-handler'
import { join } from 'path'
import { accessSync, readFileSync } from 'fs'
import ejs from 'ejs'

const log = console.log

export default class Server {
    constructor(pathPastaServir) {
        this.httpServer = http.createServer((req, res) => {
            const urlPath = req.url

            const extensao = urlPath.split('.')[1]

            //se o arquivo pedido for um ejs, vai compilar ele antes de mandar
            if (extensao === 'ejs') {
                const pathRequisitado = join(pathPastaServir, urlPath)

                try {
                    //testa se o ejs existe
                    accessSync(pathRequisitado)
                } catch {
                    //se o arquivo requisitado nao existir retorna o erro bonito da biblioteca
                    return handler(req, res, {
                        'public' : pathPastaServir
                    })
                }

                //compila o ejs
                const ejsRaw = readFileSync(pathRequisitado, 'utf8')
                const ejsCompilado = ejs.render(ejsRaw)

                res.end(ejsCompilado)
                return
            }

            //caso o arquivo nao seja um ejs, deixa essa biblioteca fazer a resposta
            return handler(req, res, {
                'public' : pathPastaServir
            })
        })
    }

    reload(caminho) {

    }

    start() {
        this.httpServer.listen(7777)
    }
}
