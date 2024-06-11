import { readFile, getFileExtension, getDifferenceObjects } from './utils.js';
import parsing from './parsers.js';
import getFormatting from './formatters/index.js';

function genDiff(filepath1, filepath2, formatter) {
  const dataFile1 = readFile(filepath1);
  const dataFile2 = readFile(filepath2);
  const extensionFile1 = getFileExtension(filepath1);
  const extensionFile2 = getFileExtension(filepath2);
  const parseFile1 = parsing(dataFile1, extensionFile1);
  const parseFile2 = parsing(dataFile2, extensionFile2);
  const differenceFiles = getDifferenceObjects(parseFile1, parseFile2);
  const formattedResult = getFormatting(differenceFiles, formatter);
  return formattedResult;
}

export default genDiff;
