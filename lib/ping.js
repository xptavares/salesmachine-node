var rp = require('request-promise');
var ping = function (api_token) {
  var options = {
      uri: 'https://api.salesmachine.io/v1/ping',
      qs: {
        api_token: api_token,
        encode: 'base64',
        _method: 'get'
      },
      headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
      },
      json: true // Automatically parses the JSON string in the response
  };
  return rp(options)
}

module.exports = ping
