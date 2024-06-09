import getStylish from './stylish.js';

export default function getFormatting(differenceFiles, format = 'stylish') {
  switch (format) {
    case 'stylish':
      return getStylish(differenceFiles);
    default: break;
  }
}