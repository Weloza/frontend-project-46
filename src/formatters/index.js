import getPlain from './plain.js';
import getStylish from './stylish.js';

export default function getFormatting(differenceFiles, format = 'stylish') {
  switch (format) {
    case 'stylish':
      return getStylish(differenceFiles);
    case 'plain':
      return getPlain(differenceFiles);
    default: break;
  }
}