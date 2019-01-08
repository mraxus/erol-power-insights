const Homey = require('homey');

const error = require('./led_error');
const success = require('./led_success');

let successAnimation = new Homey.LedringAnimation({
  ...success,
  priority: 'INFORMATIVE', // or FEEDBACK, or CRITICAL
  duration: 3000 // duration in ms, or keep empty for infinite
})
let errorAnimation = new Homey.LedringAnimation({
  ...error,
  priority: 'FEEDBACK', // or INFORMATIVE, or CRITICAL
  duration: 3000 // duration in ms, or keep empty for infinite
})

module.exports = {
  showError: (log=() => {}) => errorAnimation
    .register()
    .then( () => {
      errorAnimation.start();
    })
    .catch(this.error),
  showSuccess: (log=() => {}) => successAnimation
    .register()
    .then( () => {
      successAnimation.start();
    })
    .catch(this.error),
}
