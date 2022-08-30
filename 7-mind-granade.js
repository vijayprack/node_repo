// Commomjs, every file is module (by default)
// Modules - Encapsulated code (Only share minimum)

const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-altrenative-flavor");
require("./6-addition");

sayHi("Om");
sayHi(names.vijay);
sayHi(names.ajay);
console.log(data);