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
      var stringWithChanges;
      switch (key.condition) {
        case ('minus'):
          stringWithChanges = `Property '${completePath}' ${data.remove}`;
          break;
        case ('plus'):
          stringWithChanges = `Property '${completePath}' ${data.add}${getValue(key.secondValue)}`;
          break;
        case ('enclosure'):
          stringWithChanges = iter(key.child, `${completePath}.`);
          break;
        case ('different'):
          stringWithChanges = `Property '${completePath}' ${data.update} From ${getValue(key.firstValue)} to ${getValue(key.secondValue)}`;
          break;
        default:
          break;
      }
      return stringWithChanges;
    });
    return result.filter((n) => n !== undefined).join('\n');
  }
  return iter(tree, '');
}
