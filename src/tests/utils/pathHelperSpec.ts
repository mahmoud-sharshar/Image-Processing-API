import { getAbsolutePath } from '../../utils/pathHelper';
import fs from 'fs';

describe('Test Path Itilities', () => {
  it('get the correct absolute path of the file', async () => {
    const createdFileName = 'fileForTestingSpec.txt';
    const currentDir = process.cwd();
    fs.open(createdFileName, 'w', function (err) {
      if (err) throw err;
      const resolvedPath = getAbsolutePath(createdFileName);
      expect(resolvedPath).toEqual(
        `${currentDir}/${createdFileName}` ||
          `${currentDir}\\${createdFileName}`
      );
      fs.unlink(createdFileName, function (err) {
        if (err) throw err;
      });
    });
  });
});
