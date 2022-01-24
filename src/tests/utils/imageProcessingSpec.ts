import { getAbsolutePath } from '../../utils/pathHelper';
import { isFileExists } from '../../utils/fileHelper';
import { resizeImage } from '../../utils/imageProcessing';

describe('Test Image Processing Itilities', () => {
  it('Resize image and store the resized version', async () => {
    const width = 350;
    const height = 400;
    const fileName = 'icelandwaterfall.jpg';
    const resizedFilePath = getAbsolutePath(
      `images/thump/resized-${width}-${height}-${fileName}`
    );
    const filePath = getAbsolutePath(`images/full/${fileName}`);
    await resizeImage(filePath, width, height, resizedFilePath);
    expect(isFileExists(resizedFilePath)).toBe(true);
  });

  it("Throws an error when the file doesn't exist", async () => {
    const width = 350;
    const height = 400;
    const fileName = 'noExist.jpg';
    const resizedFilePath = getAbsolutePath(
      `images/thump/resized-${width}-${height}-${fileName}`
    );
    const filePath = getAbsolutePath(`images/full/${fileName}`);
    try {
      await resizeImage(filePath, width, height, resizedFilePath);
    } catch ({ message }) {
      expect(message as string).toEqual('Input file is missing');
    }
    expect(isFileExists(resizedFilePath)).toBe(false);
  });
});
