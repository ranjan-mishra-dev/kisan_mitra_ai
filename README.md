### node.js interviews question

*** why port number not 12 or 999
what is event loop
http module what does
require vs import
---

🔥 INTERVIEW QUESTIONS (FROM THIS CODE)
❓ Why res.end() is required?

Because it finishes the response.

❓ What is req?

An object containing request info from client.

❓ Can server handle multiple requests?

Yes, using Node’s event loop.

❓ Is this production-ready?

❌ No — we use Express for real apps.

❓ Is Node.js single-threaded?

✅ Yes, but uses worker threads for heavy tasks.

❓ Why Node.js is fast?

✅ Non-blocking I/O + event loop.

❓ What is event loop?

✅ Mechanism that handles async operations.

❓ Can Node handle multiple requests?

✅ Yes, using async callbacks.

❓ Difference between Node & Express?

Node = runtime
Express = framework

🏁 One-line summary (REMEMBER)

Node.js is a JavaScript runtime that uses an event-driven, non-blocking architecture.

🏁 ONE-LINE SUMMARY
This code creates a basic HTTP server in Node.js that listens on port 3000 and responds with “Hello Backend”.

---

## 🧩 FULL CODE (REFERENCE)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Backend");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 🔹 1️⃣ `const http = require("http");`

### What is happening?

* You are **importing Node.js’s built-in `http` module**

### Why?

* `http` module allows Node.js to:

  * create a server
  * receive requests
  * send responses

### Important:

* `"http"` is **built-in**, not installed via npm
* `require()` is **CommonJS import syntax**

📌 Meaning in simple words:

> “Give me Node’s HTTP features.”

---

# 🔹 2️⃣ `http.createServer(...)`

```js
const server = http.createServer((req, res) => {
  ...
});
```

### What is `createServer`?

* It **creates an HTTP server**
* It takes a **callback function**

### When is this callback executed?

👉 Every time a **client makes a request**
(browser, Postman, frontend, mobile app)

---

# 🔹 3️⃣ `(req, res) => {}`

### What are `req` and `res`?

| Object | Meaning             |
| ------ | ------------------- |
| `req`  | Request from client |
| `res`  | Response sent back  |

---

### `req` contains:

* URL (`req.url`)
* HTTP method (`req.method`)
* headers
* body (with parsing)

---

### `res` is used to:

* set status code
* send data
* end the response

---

## 🧠 Think like this:

> Client → **req** → Server → **res** → Client

---

# 🔹 4️⃣ `res.end("Hello Backend");`

### What does `res.end()` do?

* Sends response to client
* Ends the request-response cycle

📌 If you don’t call `res.end()`:
❌ browser will keep loading forever

---

### `"Hello Backend"`

* This is the **response body**
* Browser will show this text

---

### You can also do:

```js
res.statusCode = 200;
res.end("Success");
```

---

# 🔹 5️⃣ `const server = ...`

```js
const server = http.createServer(...)
```

### What is `server`?

* An **HTTP server object**
* Has methods like:

  * `.listen()`
  * `.close()`

---

# 🔹 6️⃣ `server.listen(3000, ...)`

```js
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### What does `listen` mean?

> “Start the server and wait for requests.”

---

### Why port `3000`?

* Ports identify applications
* 3000 is commonly used for development

Examples:

* 80 → HTTP
* 443 → HTTPS
* 3000 → Node dev server

---

# 🔹 7️⃣ Callback inside `listen`

```js
() => {
  console.log("Server running on port 3000");
}
```

### When is this executed?

* Only **once**
* When server successfully starts

📌 Used for logging or debugging.

---
1️⃣ What is Node.js? (VERY IMPORTANT)
2️⃣ What Node.js is NOT (interview trap)
3️⃣ How Node.js works (CORE CONCEPT)
4️⃣ Event Loop (MOST IMPORTANT)
5️⃣ Your First Node Program
6️⃣ Core Node Modules (VERY IMPORTANT)
7️⃣ require vs import
8️⃣ File System (fs) Module
9️⃣ Asynchronous Nature (IMPORTANT)
🔟 What is package.json?
1️⃣1️⃣ npm (Node Package Manager)
1️⃣2️⃣ Environment Variables
1️⃣3️⃣ process object
1️⃣4️⃣ Node.js Architecture (MEMORIZE)
