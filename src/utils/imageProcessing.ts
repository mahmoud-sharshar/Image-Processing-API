import sharp from 'sharp';

export const resizeImage = async (
  filePath: string,
  width: number,
  height: number,
  resizedFilePath: string
): Promise<sharp.OutputInfo> => {
  try {
    return await sharp(filePath).resize(width, height).toFile(resizedFilePath);
  } catch ({ message }) {
    throw new Error(message as string);
  }
};
