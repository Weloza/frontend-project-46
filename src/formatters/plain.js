function getValue(value) {
  if (typeof value === 'object') {
    if (value === null) {
      return value;
    }
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
}

const data = {
  remove: 'was removed',
  add: 'was added with value: ',
  update: 'was updated.',
};

export default function getPlain(tree) {
  function iter(object, path) {
    const result = object.map((key) => {
      const completePath = `${path}${key.key}`;
      switch (key.condition) {
        case 'minus':
          return `Property '${completePath}' ${data.remove}`;
        case 'plus':
          return `Property '${completePath}' ${data.add}${getValue(key.secondValue)}`;
        case 'enclosure':
          return iter(key.child, `${completePath}.`);
        case 'different':
          return `Property '${completePath}' ${data.update} From ${getValue(key.firstValue)} to ${getValue(key.secondValue)}`;
        default:
          break;
      }
      return;
    });
    return result.filter((n) => n !== undefined).join('\n');
  }
  return iter(tree, '');
}
