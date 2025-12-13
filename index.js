// console.log("Hello node.js")

const http = require("http")
const fs = require("fs")

fs.writeFileSync("test.txt", "Hello file system")

const server = http.createServer((req, res) => {
    res.end("Hello backend")
})

console.log("1")
fs.readFile("test.txt", (err, data) => {
    console.log(data)
})
console.log("2")

server.listen(3000, () => {
    console.log("server started")
})