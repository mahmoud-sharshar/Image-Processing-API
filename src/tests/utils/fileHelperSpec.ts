import { isFileExists } from '../../utils/fileHelper';

describe('Test File Itilities', () => {
  it('get true when a file exists', async () => {
    const currentFilePath = __filename;
    console.log(currentFilePath);
    expect(isFileExists(currentFilePath)).toBe(true);
  });

  it("get false when a file doesn't exist", async () => {
    const nonExistantFile = `${process.cwd()}/nofile.txt`;
    console.log(nonExistantFile);
    expect(isFileExists(nonExistantFile)).toBe(false);
  });
});
