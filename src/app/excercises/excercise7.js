console.log("Hello, Node.js!");

var fs = require("fs");
var http = require("http");
http
  .createServer(function (req, res) {
    fs.readFile("excercise7.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
