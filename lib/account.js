var rp = require('request-promise');
var base64 = require('./base64');
var account = function (api_token, account_uid, params) {
  var data = {account_uid: account_uid, params: params}
  var data64 = base64.encode(data)
  var options = {
      uri: 'https://api.salesmachine.io/v1/account',
      qs: {
        api_token: api_token,
        encode: 'base64',
        _method: 'post',
        data: data64
      },
      headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
      },
      json: true // Automatically parses the JSON string in the response
  };
  return rp(options)
}

module.exports = account
