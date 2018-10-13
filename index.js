var recipes = {}

object updateObjectWithKeyandValue(object, key, value) {
  return Object.assign({recipes}, { [key]: value })
}
