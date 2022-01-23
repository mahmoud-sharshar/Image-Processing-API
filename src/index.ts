import express from 'express';
import apiRoutes from './routes/index';
const app = express();
const port = 4000;

app.use('/', apiRoutes);
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
