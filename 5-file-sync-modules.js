// const fs = require('fs');
// const readFileSyncJavaScript = fs.readFileSync;
const path = require('path');

const {readFileSync,writeFileSync} = require('fs');
console.log('Starting the task');
const first = readFileSync(path.join(__dirname,'content','first.txt'),'utf-8');
const second = readFileSync(path.join(__dirname,'content','second.txt'),'utf-8');
writeFileSync(
    path.join(__dirname,'content','result.txt'),
    `Here is the result file : \n${first}, ${second}`
);
console.log('Done with the task');
console.log('Starting the new task');