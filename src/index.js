import {argv, chdir, cwd} from 'node:process';
import * as readline from 'node:readline/promises';
import {homeDir} from "./homeDir.js";
import {getOsInfo} from './os.js'
import os from "os";
import getHash from "./hash.js";
import {compress} from "./compress.js";
import {decompress} from "./decompress.js";

const parseArgs = () => {
    return argv[2].slice(11);

};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userName = parseArgs()

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${homeDir}`)

rl.on('line', async (input) => {

    switch (input.split(' ')[0]) {
        case '.exit':
            rl.close()
            break
        case 'os':
            const infoOs = getOsInfo(input.split(' ')[1])
            console.table(infoOs)
            break
        case 'hash':
            await getHash(input.split(' ')[1])
            break
        case'compress':
            await compress(input.split(' ')[1], input.split(' ')[2])
            break
        case 'decompress':
            await decompress(input.split(' ')[1], input.split(' ')[2])
            break
        default:
            console.log(`Received: ${input}`);
    }
});

rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
});

console.log(`Starting directory: ${cwd()}`);
try {
    chdir(`${homeDir}`);
    console.log(`New directory: ${cwd()}`);
} catch (err) {
    console.error(`chdir: ${err}`);
}

