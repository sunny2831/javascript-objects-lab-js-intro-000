var recipes = {}

function updateObjectWithKeyandValue(object, key, value) {
  return Object.assign({recipes}, { [key]: value })
}
