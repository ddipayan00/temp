const EventEmitter = require('events')
const customEmitter = new EventEmitter()
// customEmitter.emit('response') // It will not process any task
customEmitter.on('response', () => {
    console.log(`data received 1st task`) // Doing 1st task

})
// customEmitter.emit('response') // It will process 1st task but not 2nd,3rd and 4th task
customEmitter.on('response', () => {
    console.log(`some other logic here 2nd task`) // Doing 2nd task

})
// customEmitter.emit('response') // It will process 1st task and 2nd task but not 3rd and 4th task
customEmitter.on('response', () => {
    console.log(`Demo sample 3rd task`)  // Doing 3rd task

})

customEmitter.on('response', (name,id) => {
    console.log(`My name is ${name} and my id is ${id} 4th task`) // Doing 4th task

})
customEmitter.emit('response','Dip',13) // listening first
// maintain order 
// always listen first then do task





