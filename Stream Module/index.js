const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    // var fs = require('fs');
    // fs.readFile('input.txt', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

// ..........................................................................

    // 2nd Way
    // Reading from a Stream 
    // Create a readable Stream
    // Handle Stream events -> data, end and error

    // const rstream = fs.createReadStream("input.txt");

    // rstream.on("data", (chunkData) => {
    //     res.write(chunkData);
    // });

    // rstream.on("end", () => {
    //     res.end();
    // });

    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // });

// ..........................................................................
    // 3rd Way

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);

});

server.listen(8000, "127.0.0.1");