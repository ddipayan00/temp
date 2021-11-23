const { createReadStream } = require('fs')
const path = require('path')

const stream = createReadStream(path.join(__dirname,'content','big.txt'),{
    highWaterMark: 999999999,
    encoding: 'utf8'
})

stream.on('data', (result) => {
    console.log(result)
})