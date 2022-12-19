import { writeFile } from 'fs/promises';
import path from 'path';
import { cwd } from 'process';

const errorMes = 'Operation failed';

const create = async (src) => {
  try {
    const fullSrc = path.join(cwd(), src);
    await writeFile(fullSrc, '', { flag: 'wx' });
  } catch (error) {
    console.log(errorMes);
  }
};

export { create };
