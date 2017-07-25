# Salesmachine Node

This is a lib for salesmachine in node.

## Installation

  - Latest release:

      $ npm install salesmachine-node --save

  - Master branch:

      $ npm install https://github.com/xptavares/salesmachine-node/master


## How to Use

```js
// import salesmachine-node and define token
var salesmachine = require('salesmachine-node')('YOUR_API_TOKEN')

// with callback
salesmachine.ping((err, body) => {
  if(err) {
    return console.error(err.message);
  }
  console.log(body);
})

// with promise
salesmachine.ping().then(body => {
  console.log(body);
}).catch(error => {
  console.error(error.message);
})


salesmachine.track('123456', 'user_registration', {account_uid: '78910', display_name: 'Registration'}, (err, body) => {
  if(err) {
    return console.error(err.message);
  }
  console.log(body);
})

salesmachine.contact('123456', {
                                  email: "elon@teslamotors.com",
                                  name: "Elon Musk",
                                  gender: "male",
                                  mrr: 99,
                                  account_uid: "78910"
                                }, (err, body) => {
  if(err) {
    return console.error(err.message);
  }
  console.log(body);
})

salesmachine.account('78910', {
                                name: "Tesla Motors",
                                employee_count: 12000,
                                website_url: "http://www.teslamotors.com",
                                mrr: 999,
                              }, (err, body) => {
  if(err) {
    return console.error(err.message);
  }
  console.log(body);
})
```
