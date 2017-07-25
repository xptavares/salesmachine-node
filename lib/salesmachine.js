var ping = require('./ping')
var track = require('./track')
var pageview = require('./pageview')
var contact = require('./contact')
var account = require('./account')

var processCallback = function (promise, callback) {
  promise.then(function (htmlString) {
       // Process html...
       callback(null, htmlString)
   })
   .catch(function (err) {
       // Crawling failed...
       callback(err)
   });
}

var salesmachine = function (api_token) {
  var _ping = function (callback) {
    var promise = ping(api_token)
    if(!callback) {
      return promise
    }
    processCallback(promise, callback)
  }
  var _track = function (contact_uid, event_uid, params, callback) {
    var promise = track(api_token, contact_uid, event_uid, params)
    if(!callback) {
      return promise
    }
    processCallback(promise, callback)
  }
  var _pageview = function (contact_uid, account_uid, visit_url, visit_ip, visit_agent, callback) {
    var promise = pageview(api_token, contact_uid, account_uid, visit_url, visit_ip, visit_agent)
    if(!callback) {
      return promise
    }
    processCallback(promise, callback)
  }
  var _contact = function (contact_uid, params, callback) {
    var promise = contact(api_token, contact_uid, params)
    if(!callback) {
      return promise
    }
    processCallback(promise, callback)
  }
  var _account = function (account_uid, params, callback) {
    var promise = account(api_token, account_uid, params)
    if(!callback) {
      return promise
    }
    processCallback(promise, callback)
  }
  return {
    ping: _ping,
    track: _track,
    pageview: _pageview,
    contact: _contact,
    account: _account
  }
}

module.exports = salesmachine
