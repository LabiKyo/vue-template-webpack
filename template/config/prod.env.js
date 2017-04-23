const variables = [
]
let result = {}
for (const key of variables) {
  result[key] = JSON.stringify(process.env[key])
}

module.exports = Object.assign({
  NODE_ENV: '"production"',
}, result)
