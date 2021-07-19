const http = require("http");
const fs = require ("fs");
// const path = require('path');
// const url = require("url");

// const data = fs.readFileSync(`${__dirname}/User API/userapi.json`, "utf-8");
const data = fs.readFileSync("userapi.json", "utf-8");
const objData = JSON.parse(data);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/") {
        res.end("Hello from the Home sides");
    }
    else if(req.url == "/about") {
        res.end("Hello from the AboutUs sides");
    }
    else if(req.url == "/contact") {
        // res.write("Hello from the ContactUs sides");
        // res.end();
        res.end("Hello from the ContactUs sides");
    }


    else if(req.url == "/userapi") {
        // fs.readFile("userapi.json", "utf-8", (err, data) => {
        // fs.readFile(`${__dirname}/User API/userapi.json`, "utf-8", (err, data) => {
            // console.log(data);
            // console.log(err);
            // res.end(data);
            // const objData = JSON.parse(data);

            res.writeHead(200, {"content-type" : "application/json"});
            res.end(objData[0].name);
        // });
        // res.end("Hello from the User API sides");
    }


    else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>404 error (Not Found), Page does not exist.</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});


