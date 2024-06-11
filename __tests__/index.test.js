import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('test fn genDiff stylish .json', () => {
  expect(genDiff(getFixturePath(`file1.json`), getFixturePath(`file2.json`))).toEqual(readFixture('expected_file_stylish.txt'));
})

test('test fn genDiff stylish .yaml', () => {
  expect(genDiff(getFixturePath(`file1.yaml`), getFixturePath(`file2.yaml`))).toEqual(readFixture('expected_file_stylish.txt'));
})

test('test fn genDiff plain .json', () => {
  expect(genDiff(getFixturePath(`file1.json`), getFixturePath(`file2.json`), 'plain')).toEqual(readFixture('expected_file_plain.txt'));
})

test('test fn genDiff plain .yaml', () => {
  expect(genDiff(getFixturePath(`file1.yaml`), getFixturePath(`file2.yaml`), 'plain')).toEqual(readFixture('expected_file_plain.txt'));
})

test('test fn genDiff json .json', () => {
  expect(genDiff(getFixturePath(`file1.json`), getFixturePath(`file2.json`), 'json')).toEqual(readFixture('expected_file_json.txt'));
})

test('test fn genDiff json .yaml', () => {
  expect(genDiff(getFixturePath(`file1.yaml`), getFixturePath(`file2.yaml`), 'json')).toEqual(readFixture('expected_file_json.txt'));
})
