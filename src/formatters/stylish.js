import _ from 'lodash';

const data = {
  plus: '+ ',
  minus: '- ',
  tab: '  ',
};

function getSpace(depth, symbol) {
  const space = '    ';
  if (!symbol) {
    return space.repeat(depth);
  }
  if (depth === 0 && !symbol) {
    return '';
  }
  return `${space.repeat(depth)}  ${symbol}`;
}

function stringify(value, depth) {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const output = Object.entries(value).map(([key, valu]) => `${getSpace(depth + 1, data.tab)}${key}: ${stringify(valu, depth + 1)}`);
  return ['{', ...output, `${getSpace(depth + 1)}}`].join('\n');
}

export default function getStylish(tree) {
  const iter = (object, depth) => {
    const result = object.map((key) => {
      switch (key.condition) {
        case 'minus':
          return `${getSpace(depth, data.minus)}${key.key}: ${stringify(key.firstValue, depth)}`;
        case 'plus':
          return `${getSpace(depth, data.plus)}${key.key}: ${stringify(key.secondValue, depth)}`;
        case 'enclosure':
          return `${getSpace(depth, data.tab)}${key.key}: ${iter(key.child, depth + 1)}`;
        case 'different':
          return [`${getSpace(depth, data.minus)}${key.key}: ${stringify(key.firstValue, depth)}\n${getSpace(depth, data.plus)}${key.key}: ${stringify(key.secondValue, depth)}`];
        default:
          return `${getSpace(depth, data.tab)}${key.key}: ${stringify(key.firstValue, depth)}`;
      }
    });
    return ['{', ...result, `${getSpace(depth)}}`].join('\n');
  };
  return iter(tree, 0);
}
