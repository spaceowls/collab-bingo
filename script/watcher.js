import chokidar from 'chokidar'
import sass from 'sass'
import { writeFileSync } from 'fs'
import { join } from 'path'

export default function inicarWatcher(pastaAObservar, caminhoSass, eventoRecarregar){
    const watcher = chokidar.watch(pastaAObservar)

    watcher.on('ready', (event, path) => {
        //so vai comecar a ouvir por mudancas quando toda a pasta for listada
        watcher.on('all', (event, path) => {
            //primeiro quando receber um evento vai ver se ele e um arquivo sass
            //e se for vai recompilar o sass
            console.log(path)
            if(path.endsWith('.scss') || path.endsWith('sass')){
                let sassCompilado = sass.renderSync({file:caminhoSass}).css
                let caminhoSaidaSass = join(pastaAObservar, 'css/main.css')
                writeFileSync(caminhoSaidaSass, sassCompilado)
                console.log('o sass foi compilado', caminhoSaidaSass)
            } else if (path.endsWith('.css')){
                return
            }

            console.log('mudanca presentida')
            console.log('**************')

            eventoRecarregar()
        })
    })
}
