const { generateFunctions } = require('./base');

const LOG_NAME = 'real-energy'
const OPTIONS = {
  decimals: 0,
  label: 'Real Energy (kWh)',
  type: 'number',
  units: 'kWh',
};

module.exports = generateFunctions(LOG_NAME, OPTIONS);
