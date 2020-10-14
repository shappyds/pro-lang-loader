const { runLoaders } = require('loader-runner')
const fs = require('fs')
const path = require('path')

runLoaders({
  resource: path.join(__dirname, './test/demo.json'),
  loaders: [
    path.join(__dirname, './src/index.js')
  ],
  context: {
    minimize: true
  },
  readResource: fs.readFile.bind(this)
}, (err, result) => {
  err ? console.log(err) : console.log(result) 
})