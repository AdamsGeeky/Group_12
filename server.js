const http = require("http");
const url = require("url");
const fs = require("fs");
const os = require("os");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    fs.readFile(`${__dirname}/pages/index.html`, "utf-8", (err, html) => {
       res.statusCode = 200;
      res.setHeader("content-type", "text/html");
      res.end(html);
    });
  } else if (pathName === "/about") {
    fs.readFile(`${__dirname}/pages/about.html`, "utf-8", (err, html) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(html);
    });
  } else if (pathName === "/sys") {
let osInfo = {
      hostname: os.hostname(),
      platform: os.platform(),
      architecture: os.arch(),
      numberOfCPUS: os.cpus(),
      networkInterfaces: os.networkInterfaces(),
      uptime: os.uptime(),
    };

    let data = JSON.stringify(osInfo);

    fs.writeFile(`${__dirname}/osinfo.json`, data, (err) => {
      res.writeHead(201, { "content-type": "text/plain" });
      res.end("Your OS info has been saved successfully!");
    });
  } else {
    fs.readFile(`${__dirname}/pages/404.html`, "utf-8", (err, html) => {
      res.writeHead(404, { "content-type": "text/html" });
      res.end(html);
    });
  }
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
