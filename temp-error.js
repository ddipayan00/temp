const prompt = require('prompt');
const EventEmitter = require('events')
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const gt = () => {
    r1.question("What is your name ? ", (name) => {
        r1.question("Where do you live ? ", (country) => {
            console.log(`${name} is from ${country} `)
            r1.close();
        })
    })
}


const customEmitter = new EventEmitter()
customEmitter.on('response', () => {
    gt()
    prompt.start();
    prompt.get(['username', 'email'], function (err, result) {
        if (err) { return onErr(err); }
        console.log('Command-line input received:');
        console.log('  Username: ' + result.username);
        console.log('  Email: ' + result.email);
    });
    function onErr(err) {
        console.log(err);
    }
})


r1.on("close", function() {
    console.log("\nBYE BYE !!!");
    customEmitter.emit('response');
    process.exit(0);
});


