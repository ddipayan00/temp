const { readFile, writeFile } = require('fs');
const path = require('path');

const writeText = (path,text) => {
    return new Promise((resolve, reject) =>{
        writeFile(path,text,'utf8',(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path,'utf8',(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            else{
                resolve(result);
            }
        })
    })
}
const start = async() => {
    try{
        const first = await getText(path.join(__dirname,'content','first.txt'))
        const second = await getText(path.join(__dirname,'content','second.txt'))
        let text = `Here is the result file : \n${first} ${second}`
        await writeText(path.join(__dirname,'content','result.txt'),text)
        console.log(first,second);
    }
    catch(error){
        console.log(error)
    } 
}

start();

