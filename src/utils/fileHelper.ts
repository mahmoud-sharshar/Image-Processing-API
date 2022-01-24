import fs from 'fs';

export const isFileExists = (filePath: fs.PathLike): boolean => {
  if (fs.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
};
