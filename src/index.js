const { getOptions } = require('loader-utils')
const { localize } = require('pseudo-localization')

module.exports = function(source) {
  let value 
  try {
    const options = getOptions(this)
    value = JSON.parse(source)

    Object.keys(value).forEach(key => {
      if (value[key] && value[key].value) {
        value[key] = options && options.pseudoLocalization ? localize(value[key].value) : value[key].value
      }
    })

  } catch (error) {
    console.log(error)
  }

  value = value ? JSON.stringify(value)
  .replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029') : source

  return value
}