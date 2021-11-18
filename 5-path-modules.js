const path = require('path'); 
// Study tips **************************************************************************
// Practice path methods as much as possible

console.log(path.sep); // path separator
const separator = path.sep;

// File Path using join method
const filePath = path.join(`${separator}content${separator}`,'subfolder','test.txt');
console.log(filePath);

// Base name using basename method
const base = path.basename(filePath);
console.log(base);

// Absolute Path using resolve method
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute); 