
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0
  return array.reduce((min, n) => n < min ? min = n : min)
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0
}
