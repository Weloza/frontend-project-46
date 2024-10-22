import getPlain from './plain.js';
import getStylish from './stylish.js';

export default function getFormatting(differenceFiles, format) {
  switch (format) {
    case 'stylish':
      return getStylish(differenceFiles);
    case 'plain':
      return getPlain(differenceFiles);
    case 'json':
      return JSON.stringify(differenceFiles);
    default:
      throw new Error(`Unknown format - ${format}`);
  }
}
