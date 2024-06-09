import _ from 'lodash';

function format(data) {
  const result = data.map((element) => {
    if (element.condition === 'haveOnlyFirst') {
      return `- ${element.key}: ${element.firstValue}`;
    }
    if (element.condition === 'haveOnlySecond') {
      return `- ${element.key}: ${element.secondValue}`;
    }
    if (element.condition === 'haveBothUnequal') {
      return [`- ${element.key}: ${element.firstValue}`,`+ ${element.key}: ${element.secondValue}`];
    }
    return `  ${element.key}: ${element.firstValue}`;
  })
  return _.flatten(result).join('\n');
}

export default format;