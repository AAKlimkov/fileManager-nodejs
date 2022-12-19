import { argv, chdir, cwd } from 'process';
import * as readline from 'readline/promises';
import { homeDir } from './homeDir.js';
import { getOsInfo } from './os.js';
import os from 'os';
import getHash from './hash.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';
import { up } from './fileSystem.js';
import { open } from './pathManipulation.js';
import { read } from './fs/read.js';
import { create } from './fs/create.js';
import { copy } from './fs/copy.js';
import { rename } from 'fs/promises';
import { remove } from './fs/delete.js';

const parseArgs = () => {
  return argv[2].slice(11);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = parseArgs();

console.log(`Welcome to the File Manager, ${userName}!`);

rl.on('line', async (input) => {
  switch (input.split(' ')[0]) {
    case '.exit':
      rl.close();
      break;
    case 'up':
      up();
      console.log(cwd());
      break;
    case 'cd':
      chdir(input.split(' ')[1]);
      break;
    case 'ls':
      open(input.split(' ')[1]);
      break;
    case 'cat':
      read(input.split(' ')[1]);
      break;
    case 'add':
      create(input.split(' ')[1]);
      break;
    case 'rn':
      rename(input.split(' ')[1], input.split(' ')[2]);
      break;
    case 'cp':
      copy(input.split(' ')[1], input.split(' ')[2]);
      break;
    case 'rm':
      remove(input.split(' ')[1]);
      break;
    case 'mv':
      const isCopyOk = await copy(input.split(' ')[1], input.split(' ')[2]);
      if (isCopyOk) {
        remove(input.split(' ')[1]);
      }
      break;
    case 'os':
      const infoOs = getOsInfo(input.split(' ')[1]);
      console.table(infoOs);
      break;
    case 'hash':
      await getHash(input.split(' ')[1]);
      break;
    case 'compress':
      await compress(input.split(' ')[1], input.split(' ')[2]);
      break;
    case 'decompress':
      await decompress(input.split(' ')[1], input.split(' ')[2]);
      break;
    default:
      console.log(`Invalid input`);
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});
chdir(`${homeDir}`);
console.log(`You are currently in ${cwd()}`);
