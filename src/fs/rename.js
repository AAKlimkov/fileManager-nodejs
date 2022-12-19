import { rename as renamePromises, access } from 'fs/promises';
import path from 'path';

const errorMes = 'Operation failed';

const rename = async (oldPath, newName) => {
  const newPath = path.join(path.dirname, newName);

  try {
    await renamePromises(oldPath, newPath);
  } catch (e) {
    console.log(errorMes);
  }
};

export { rename };
