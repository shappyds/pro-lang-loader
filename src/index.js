module.exports = function(source) {
  let value 
  try {
    value = JSON.parse(source)

    Object.keys(value).forEach(key => {
      if (value[key] && value[key].value) {
        value[key] = value[key].value
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