import express from 'express';
import imagesProcessingAPI from './api/imageProcessingAPI';
const routes = express.Router();

routes.use('/images', imagesProcessingAPI);

export default routes;
