const {firstName, lastName} = require('./4-names');
// const {first, last} = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
console.log(data);
sayHi(names.firstName);
sayHi(names.lastName);
sayHi(firstName);
sayHi(lastName);
// sayHi(first);
// sayHi(last);