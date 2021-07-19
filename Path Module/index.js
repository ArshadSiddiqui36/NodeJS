const path = require("path");

console.log(path.dirname("D:/Web Development/NodeJs/Path Module/index.js"));
console.log(path.extname("D:/Web Development/NodeJs/Path Module/index.js"));
console.log(path.basename("D:/Web Development/NodeJs/Path Module/index.js"));

// console.log(path.parse("D:/Web Development/NodeJs/Path Module/index.js"));

const myPath = path.parse("D:/Web Development/NodeJs/Path Module/index.js");
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.ext);
console.log(myPath.name);