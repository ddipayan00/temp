const { readFile,writeFile } = require('fs');
const path = require('path');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const first = await readFilePromise(path.join(__dirname,'content','first.txt'),'utf8')
        const second = await readFilePromise(path.join(__dirname,'content','second.txt'),'utf8')
        await writeFilePromise(path.join(__dirname,'content','result.txt'),`Here is the result file : \n${first} ${second}`,'utf8')
        console.log(first,second);
    }
    catch(error){
        console.log(error)
    } 
}

start();