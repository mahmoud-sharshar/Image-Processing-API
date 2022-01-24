import sharp from 'sharp';

export const resizeImage = async (
  filePath: string,
  width: number,
  height: number,
  resizedFilePath: string
) => {
  try {
    return await sharp(filePath).resize(width, height).toFile(resizedFilePath);
  } catch (err: any) {
    throw new Error(err.message);
  }
};
