import yaml from 'js-yaml';

function parsing(data, extension) {
  if (extension === 'json') {
    return JSON.parse(data);
  }
  if ((extension === 'yaml') || (extension === 'yml')) {
    return yaml.load(data);
  }
  throw new Error(`Unknown file extension - ${extension}`);
}

export default parsing;
