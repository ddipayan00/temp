const fs = require('fs');
const { result } = require('lodash');
const path = require('path');
console.log('Started  first task');
// CHECK FILE PATH
fs.readFile(path.join(__dirname,'content','first.txt'),'utf8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed first task');
});
console.log('Starting next task');