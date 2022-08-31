// npm init -y
// npm init
// npm i lodash
// npm i bootstrap
// npm i nodemon -D

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);
console.log('hello world!!');