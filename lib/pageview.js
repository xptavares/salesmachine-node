var rp = require('request-promise');
var track = require('./track')
var pageview = function (api_token, contact_uid, account_uid, visit_url, visit_ip, visit_agent) {
  var params = {
    account_uid: account_uid,
    visit_url: visit_url,
    visit_ip: visit_ip,
    visit_agent: visit_agent
  }
  return track(api_token, contact_uid, 'pageview', params)
}

module.exports = pageview
