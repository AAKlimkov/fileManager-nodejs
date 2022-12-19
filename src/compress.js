import {createBrotliCompress} from 'zlib';
import {promisify} from 'util';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {normalize} from 'path'

const pipe = promisify(pipeline);

export async function compress(sourcePath, destinationPath) {
    console.log(arguments)
    try {
        const brotliCompress = createBrotliCompress();
        const source = createReadStream(normalize(sourcePath));
        const destination = createWriteStream(normalize(destinationPath));

        await pipe(source, brotliCompress, destination);
    } catch {
        console.log('Operation failed');
        process.exitCode = 1;
    }
}

