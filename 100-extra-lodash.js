const dd = require('lodash');

const item = [1, [2, [3, [4]]]];
const newItems = dd.flattenDeep(item);
console.log(newItems);