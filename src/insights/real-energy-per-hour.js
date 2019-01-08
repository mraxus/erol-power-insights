const { generateFunctions } = require('./base');

const LOG_NAME = 'real-energy-per-hour'
const OPTIONS = {
  decimals: 0,
  label: 'Real Energy per Hour (Wh/h)',
  type: 'number',
  units: 'Wh/h',
};

module.exports = generateFunctions(LOG_NAME, OPTIONS);
