import {createHash} from 'crypto';
import {readFile} from 'fs/promises';
import {normalize} from 'path'

export default async function getHash(path) {
    try {
        const fileContent = await readFile(normalize(path));
        const hash = createHash('sha256').update(fileContent).digest('hex');
        console.log(hash)
    } catch {
        console.log('Operation failed')
    }

};

