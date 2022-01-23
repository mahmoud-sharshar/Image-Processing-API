import express from 'express';
import { isFileExists } from '../../utils/fileHelper';
import { resizeImage } from '../../utils/imageProcessing';
import { getAbsolutePath } from '../../utils/pathHelper';
const router = express.Router();

router.get('/resize', async (req, res) => {
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
  const fileName = req.query.filename;
  if (!width || !height || !fileName)
    res
      .status(400)
      .send('width, height and filename query parameters are required');
  const filePath = getAbsolutePath(`images/full/${fileName}`);
  if (!isFileExists(filePath))
    return res.status(400).send("Requested file doesn't exist");
  const resizedFilePath = getAbsolutePath(
    `images/thump/resized-${width}-${height}-${fileName}`
  );
  if (isFileExists(resizedFilePath)) return res.sendFile(resizedFilePath);

  try {
    await resizeImage(filePath, width, height, resizedFilePath);
    return res.sendFile(resizedFilePath);
  } catch (err: any) {
    res.status(500);
  }
});

export default router;
