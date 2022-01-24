import supertest from 'supertest';
import app from '../../../index';
import { isFileExists } from '../../../utils/fileHelper';
import { getAbsolutePath } from '../../../utils/pathHelper';

const request = supertest(app);
describe('Test Image Processing API', () => {
  it('get status code 200 when requesting valid image', async () => {
    const response = await request.get(
      '/images/resize?width=200&height=300&filename=encenadaport.jpg'
    );
    expect(response.status).toBe(200);
  });

  it('get status code 400 when requesting valid image with missing width or height arguments', async () => {
    const response = await request.get(
      '/images/resize?width=200&filename=encenadaport.jpg'
    );
    expect(response.status).toBe(400);
  });

  it("get status code 400 when requesting a file that doesn't exist", async () => {
    const response = await request.get(
      '/images/resize?width=200&height=300&filename=encenadat.jpg'
    );
    expect(response.status).toBe(400);
  });

  it('the resized image should be created in the caching folder after completing the request', async () => {
    const width = 300;
    const height = 300;
    const fileName = 'encenadaport.jpg';
    const resizedFilePath = getAbsolutePath(
      `images/thump/resized-${width}-${height}-${fileName}`
    );
    const response = await request.get(
      `/images/resize?width=${width}&height=${height}&filename=${fileName}`
    );
    expect(response.status).toBe(200);
    expect(isFileExists(resizedFilePath)).toBe(true);
  });
});
