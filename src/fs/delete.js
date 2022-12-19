import { rm } from 'fs/promises';

const errorMes = 'Operation failed';

const remove = async (fileToDelete) => {
  try {
    await rm(fileToDelete);
  } catch (error) {
    console.log(errorMes);
  }
};

export {remove};
