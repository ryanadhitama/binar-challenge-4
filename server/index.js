/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require("http");
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "utf-8");
}

function getFile(file) {
  const bitmap = fs.readFileSync(path.join(PUBLIC_DIRECTORY, file));
  return bitmap;
}

function onRequest(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(getHTML("index.html"));
      return;
    case "/cars":
      res.writeHead(200);
      res.end(getHTML("cars.html"));
      return;
    default:
      let splitData = req.url.split("/");
      if (["images", "icons"].includes(splitData[1])) {
        res.writeHead(200);
        res.end(getFile(req.url));
      } else {
        res.writeHead(200);
        res.end(getHTML(req.url));
      }

      return;
  }
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, "0.0.0.0", () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
});
