import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function readFile(filepath) {
  const directoryName = process.cwd(filepath);
  const completeFilepath = path.resolve(directoryName, filepath);
  return fs.readFileSync(completeFilepath, 'utf-8');
}

function getFileExtension(filepath) {
  return path.extname(filepath).slice(1);
}

function getDifferenceObjects(object1, object2) {
  const allKeysConditions = _.sortBy(_.union(_.keys(object1), _.keys(object2)).map((key) => {
    const firstValue = object1[key];
    const secondValue = object2[key];
    if (!_.has(object2, key)) {
      return {
        condition: 'minus',
        key,
        firstValue,
      };
    }
    if (!_.has(object1, key)) {
      return {
        condition: 'plus',
        key,
        secondValue,
      };
    }
    if (_.isObject(firstValue) && _.isObject(secondValue)) {
      return {
        condition: 'enclosure',
        key,
        child: getDifferenceObjects(firstValue, secondValue),
      };
    }
    if (firstValue !== secondValue) {
      return {
        condition: 'different',
        key,
        firstValue,
        secondValue,
      };
    }
    return {
      key,
      firstValue,
    };
  }), ['key']);
  return allKeysConditions;
}

export { readFile, getFileExtension, getDifferenceObjects };
