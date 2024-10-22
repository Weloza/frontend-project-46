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
      if (key.condition === 'minus') {
        return `Property '${completePath}' ${data.remove}`;
      } else if (key.condition === 'plus') {
        return `Property '${completePath}' ${data.add}${getValue(key.secondValue)}`;
      } else if (key.condition === 'enclosure') {
        return iter(key.child, `${completePath}.`);
      } else if (key.condition === 'different') {
        return `Property '${completePath}' ${data.update} From ${getValue(key.firstValue)} to ${getValue(key.secondValue)}`;
      } else {
        return undefined;
      }
    });
    return result.filter((n) => n !== undefined).join('\n');
  }
  return iter(tree, '');
}
