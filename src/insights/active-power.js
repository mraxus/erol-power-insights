const { generateFunctions } = require('./base');

const LOG_NAME = 'active-power'
const OPTIONS = {
  chart: 'column',
  decimals: 0,
  label: 'Active Power (W)',
  type: 'number',
  units: 'W',
};

module.exports = generateFunctions(LOG_NAME, OPTIONS);
