import express, { NextFunction, Request, Response } from 'express';
import { isFileExists } from '../../utils/fileHelper';
import { resizeImage } from '../../utils/imageProcessing';
import { getAbsolutePath } from '../../utils/pathHelper';
const router = express.Router();

const validateQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | undefined => {
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const fileName = req.query.filename;
  if (!width || !height || !fileName)
    return res
      .status(400)
      .send('width, height and filename query parameters are required');
  const filePath = getAbsolutePath(`images/full/${fileName}`);
  if (!isFileExists(filePath))
    return res.status(400).send("Requested file doesn't exist");
  next();
};

router.get(
  '/resize',
  validateQueryParams,
  async (req: Request, res: Response): Promise<void> => {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const fileName = req.query.filename;
    const filePath = getAbsolutePath(`images/full/${fileName}`);
    const resizedFilePath = getAbsolutePath(
      `images/thump/resized-${width}-${height}-${fileName}`
    );
    if (isFileExists(resizedFilePath)) return res.sendFile(resizedFilePath);
    try {
      await resizeImage(filePath, width, height, resizedFilePath);
      return res.sendFile(resizedFilePath);
    } catch {
      res.status(500);
    }
  }
);

export default router;
