var rp = require('request-promise');
var base64 = require('base-64');
var contact = function (api_token, contact_uid, params) {
  var data = {contact_uid: contact_uid, params: params}
  var data64 = base64.encode(data)
  var options = {
      uri: 'https://api.salesmachine.io/v1/contact',
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

module.exports = contact
