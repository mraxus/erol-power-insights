const {ManagerInsights} = require('homey');

module.exports = {
  generateFunctions: (logName, options) => ({
    logValue: (value, date) => ManagerInsights
      .getLog(logName)
      .catch(err => {
        if (err.message === 'invalid_log') {
          return ManagerInsights.createLog(logName, options);
        }
        throw err;
      })
      .then(insightLog => {
        insightLog.createEntry(value, date);
        return {
          msg: `Value ${value} saved to '${logName}' log`,
          date,
          value,
        }
      })
      .catch(error => {
        return {
          error,
          date,
          value,
        }
      })
  })
};
