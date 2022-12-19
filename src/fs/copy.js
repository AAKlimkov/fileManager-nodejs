import { cp } from 'fs/promises';
import path from 'path';

const errorMes = 'Operation failed';

const copy = async (source, destenition) => {
  try {
    const destenitionPath = path.join(destenition, path.parse(source).base);
    await cp(source, destenitionPath, {
      recursive: true,
      errorOnExist: true,
    });
    return true;
  } catch (error) {
    console.log(errorMes);
  }
};

export { copy };
