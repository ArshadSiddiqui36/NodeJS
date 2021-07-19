const os = require("os");

console.log(os.arch());

console.log(os.platform());

console.log(os.hostname());

console.log(os.tmpdir());

console.log(os.type());

console.log(os.version());

console.log(os.EOL);

// console.log(os.constants);

// console.log(os.cpus());

console.log(os.endianness());

// console.log(os.getPriority([pid]));

console.log(os.homedir());

// console.log(os.loadavg());

// console.log(os.networkInterfaces());

console.log(os.uptime());

// console.log(os.userInfo([options]));


const freeMemory = os.freemem();
// console.log(freeMemory);
console.log(`${freeMemory/1024/1024/1024}` +" GB");


const totalMemory = os.totalmem();
// console.log(freeMemory);
console.log(`${totalMemory/1024/1024/1024}` +" GB");


