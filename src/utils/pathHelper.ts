import path from 'path';

export const getAbsolutePath = (relativePath: string): string => {
  return path.resolve(relativePath);
};
