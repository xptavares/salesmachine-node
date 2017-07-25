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

## License

(The MIT License)

Copyright (c) 2017 Alexandre Tavares &lt;xptavares@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
