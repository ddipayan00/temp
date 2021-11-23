var http = require('http')
var fs = require('fs')
const 
const server = http.createServer((req, res) =>{
    const text = fs.readFileSync('./content/big.txt', 'utf8')
    res.end(text)
    // const fileStream = fs.createReadStream(path.join(__dirname,'content','big.txt'),'utf8')
    // fileStream.on('open', () => {
    //   fileStream.pipe(res)
    // })
    // fileStream.on('error', (err) => {
    //   res.end(err)
    // })
  });
server.listen(5000)