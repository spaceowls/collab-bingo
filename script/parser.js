import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { accessSync } from 'fs';


const pastaAtual = dirname(fileURLToPath(import.meta.url))
const pastaWatcher = join(pastaAtual, '../src')

try {
    accessSync(pastaWatcher)
} catch {
    throw 'Pasta src nao existe'
}

export default pastaWatcher
