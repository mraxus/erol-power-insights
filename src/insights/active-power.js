const { generateFunctions } = require('./base');

const LOG_NAME = 'active-power'
const OPTIONS = {
  decimals: 0,
  label: 'Active Power (W)',
  type: 'number',
  units: 'W',
};

module.exports = generateFunctions(LOG_NAME, OPTIONS);
