const fs = require ("fs");

const bioData = {
    name : "Arshad",
    age : 24,
    website : "https://skillsrouting.blogspot.com",
};

// console.log(bioData.name);
// console.log(bioData.age);
// console.log(bioData.website);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);


// const objData = JSON.parse(jsonData);
// console.log(objData);

/*
1: Convert to JSON
2: Add to another File
3: Read File
4: Again convert back to JS object
5: console.log()
*/

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
console.log("Done");
});


// API stands for Application Programming Interface

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});