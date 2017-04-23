var merge = require('webpack-merge')

const variables = [
]
let result = {}
variables.forEach(function(key) {
  result[key] = '"' + process.env[key] + '"'
})

module.exports = merge({
  NODE_ENV: '"production"',
}, result)
