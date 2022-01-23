import path from 'path';

export const getAbsolutePath = (relativePath: string) => {
  return path.resolve(relativePath);
};
