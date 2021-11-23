const http = require('http')
const fs = require('fs')
const path = require('path') 
const server = http.createServer((req, res) =>{
    // const text = fs.readFileSync(path.join(__dirname,'content','big.txt'),'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream(path.join(__dirname,'content','big.txt'),'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  });
server.listen(5000)