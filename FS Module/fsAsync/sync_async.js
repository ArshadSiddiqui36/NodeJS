const fs = require("fs");

// Syncronous
const data = fs.readFileSync("read.txt", "utf-8");
console.log(data);
console.log("after the data");

console.log("...................")

// Asyncronous
fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("after the data");

