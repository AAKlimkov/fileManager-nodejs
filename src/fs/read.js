import { readFile } from 'fs/promises';

const errorMes = 'Operation failed';

const read = async (pathToFile) => {
  try {
    const text = await readFile(pathToFile, 'utf8');
    console.log(text);
  } catch (error) {
    console.log(errorMes);
  }
};

export { read };
