import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function readFile(filepath) {
  const directoryName = process.cwd(filepath);
  const completeFilepath = path.resolve(directoryName, filepath);
  return fs.readFileSync(completeFilepath, 'utf-8');
}

function getFileExtension(filepath) {
  const pathArray = filepath.split('.');
  const result = pathArray[pathArray.length - 1];
  return result;
}

function getDifferenceObjects(object1, object2) {
  const allKeysConditions = _.sortBy(_.union(_.keys(object1), _.keys(object2)).map((key) => {
    const firstValue = object1[key];
    const secondValue = object2[key];
    if (!_.has(object2, key)) {
      return {
        condition: 'haveOnlyFirst',
        key,
        firstValue,
      }
    }
    if (!_.has(object1, key)) {
      return {
        condition: 'haveOnlySecond',
        key,
        secondValue,
      }
    }
    if (firstValue !== secondValue) {
      return {
        condition: 'haveBothUnequal',
        key,
        firstValue,
        secondValue,
      }
    }
    return {
      condition: 'haveBothEqual',
      key,
      firstValue,
    };
  }), ['key']);
  return allKeysConditions;
}

export { readFile, getFileExtension, getDifferenceObjects };