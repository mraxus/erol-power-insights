const { generateFunctions } = require('./base');

const LOG_NAME = 'real-energy-per-hour'
const OPTIONS = {
  decimals: 0,
  label: 'Real Energy per Hour (kWh/h)',
  type: 'number',
  units: 'kWh/h',
};

module.exports = generateFunctions(LOG_NAME, OPTIONS);
