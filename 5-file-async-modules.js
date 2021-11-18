const {readFile, writeFile} = require('fs');
const path = require('path');
// Here is the callback hellllllllllllllllllllllllllllllllll
console.log('Staring the task');
readFile(path.join(__dirname,'content','first.txt'),'utf8',(err,result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile(path.join(__dirname,'content','second.txt'),'utf8',(err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(path.join(__dirname,'content','result.txt'),`Here is the result : \n${first} ${second}`,'utf8',(err,result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Done with the task');
            readFile(path.join(__dirname,'content','result.txt'),'utf8',(err,result) => {
                if(err){
                    console.log(err);
                    return;
                }
                const res = result;
                // console.log(res);
                
            })
        })
    })
})

console.log('Starting the new task');