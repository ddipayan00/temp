const {writeFileSync} = require('fs');
const path = require('path')
const n = 10000
for(let i=1;i<=n;i++){
    if(i == n){
        writeFileSync(path.join(__dirname,'content','big.txt'),`Hello world ${i} time`,{ flag: 'a' })
    }
    else{
        writeFileSync(path.join(__dirname,'content','big.txt'),`Hello world ${i} time\n`,{ flag: 'a' })
    }
}