module.exports.encode = function (data) {
  return new Buffer(JSON.stringify(data)).toString("base64")
}
