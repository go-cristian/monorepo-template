// eslint-disable-next-line prefer-const
let percyHealthCheck = require('@percy/cypress/task')

module.exports = (on) => {
  on('task', percyHealthCheck)
}
