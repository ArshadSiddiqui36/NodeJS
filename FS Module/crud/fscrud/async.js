const fs = require("fs");

// fs.mkdir("./crudasync", (err) => {
//     console.log("Folder Created");
// });


// fs.writeFile("./crudasync/bio.txt", "Like, Share and Subscribe", (err) => {
//     console.log("File created");
//     console.log(err);
// });


// fs.appendFile("./crudasync/bio.txt", " and Comment below", (err) => {
//     console.log("Data added");
// });


// fs.readFile("./crudasync/bio.txt", "utf-8", (err, data) => {
//     console.log(data);
//     console.log(err);
// });


// fs.rename("./crudasync/bio.txt", "./crudasync/data.txt", (err) => {
//     console.log("Renamed file");
//     console.log(err);
// })


fs.unlink("./crudasync/data.txt", (err) => {
    console.log("Folder and Data has removed or deleted");
    console.log(err);
})


fs.rmdir("./crudasync", (err) => {
    console.log("Folder and Data has removed or deleted");
    console.log(err);
});