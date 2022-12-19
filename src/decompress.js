import {createBrotliDecompress} from 'zlib';
import {promisify} from 'util';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {normalize} from "path";

const pipe = promisify(pipeline);

export async function decompress(sourcePath, destinationPath) {
    try {
        const brotliDecompress = createBrotliDecompress();
        const source = createReadStream(normalize(sourcePath));
        const destination = createWriteStream(normalize(destinationPath));
        pipe(source, brotliDecompress, destination);
    } catch {
        console.log('Operation failed');
        process.exitCode = 1;
    }
}
