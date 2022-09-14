const fs = require("fs");
const http = require("http");

fs.writeFile("index.html", "<h1> Hello World </h1>\n<p> This is sample text</p>", (err) => {
  if (err) {
    console.log(err);
  }
})

const server = http.createServer((req, res) => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  })
})

server.listen(5000, () => {
  console.log("server started at port 5000");
})