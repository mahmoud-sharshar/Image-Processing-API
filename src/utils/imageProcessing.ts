import sharp from 'sharp';

export const resizeImage = async (
  filePath: string,
  width: number,
  height: number,
  resizedFilePath: string
) => {
  return await sharp(filePath).resize(width, height).toFile(resizedFilePath);
};
