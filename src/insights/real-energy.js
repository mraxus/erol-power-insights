const { generateFunctions } = require('./base');

const LOG_NAME = 'real-energy'
const OPTIONS = {
  decimals: 0,
  label: 'Real Energy (Wh)',
  type: 'number',
  units: 'Wh',
};

module.exports = generateFunctions(LOG_NAME, OPTIONS);
