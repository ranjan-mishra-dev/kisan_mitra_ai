// console.log("Hello node.js")

// const http = require("http")
// const fs = require("fs")

// fs.writeFileSync("test.txt", "Hello file system")

// const server = http.createServer((req, res) => {
//     res.end("Hello backend")
// })

// console.log("1")
// fs.readFile("test.txt", (err, data) => {
//     console.log(data)
// })
// console.log("2")

// server.listen(3000, () => {
//     console.log("server started")
// })

// -----

//need of express 
// without express

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end("Home");
//     } else if (req.url == '/login') {
//         res.end("Login");
//     } else if (req.url == '/register') {
//         res.end("Resgister");
//     } else {
//         res.end("404 Not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server started");
// })

// Problems here ❌
// Too many if-else
// No clean separation of logic
// Hard to scale
// No middleware
// Manual parsing (body, headers, query)
// Security & auth become painful
// 👉 Real projects cannot survive like this

//with express

//Express is a thin layer on top of Node.js that simplifies building APIs and servers.
// | Problem         | Express solution        |
// | --------------- | ----------------------- |
// | Routing mess    | Clean routes            |
// | Request parsing | `req.body`, `req.query` |
// | Middleware      | Auth, logs, validation  |
// | Code structure  | MVC style               |
// | Reusability     | Routers                 |
// | Productivity    | Less code               |

//Routing = mapping an HTTP request to a function

const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Home page")
})

app.listen(3000, () => {
    console.log("Server started");
})
/**
 4️⃣ Request & Response in Express
req object:
    req.params   // URL params
    req.query    // ?page=1
    req.body     // POST data
    req.headers

res object:
    res.send()
    res.json()
    res.status(201)
    res.redirect()

    Middleware = function that runs before route handler
 */