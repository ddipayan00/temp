const os = require('os');
const platForm = os.platform();
const userInfo = os.userInfo();
const version = os.version();
const type = os.type();
const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log();
console.log("Os : "+platForm);
console.log("UserInfo : "+userInfo.username);
console.log("Type : "+type);
console.log("Version : "+version);
console.log("Total Memory : "+totalMem+" byte");
let i = 0;
setInterval(()=>{
    console.log("\nMemory Monitor"+(++i)+"\nTotal Memory : "+totalMem+" byte");
    console.log("\nUsed Memory : "+(totalMem-freeMem)+" byte");
    console.log("Free Memory : "+freeMem+" byte");
},5000);