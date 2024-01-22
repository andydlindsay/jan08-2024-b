# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Cannot Set Headers Error

### Web Server
* that serves up content for the web
* files, images, videos, text content
* understands HTTP

### HTTP
* HyperText Transfer Protocol
* Request Response Cycle

client <======= tcp/http =========> server
response

### Request
* what we want to accomplish; HTTP verb/method
  * GET => I'd like to retrieve something
  * POST => I'd like to send info to the server
* what do we want to do it to? path/url
  * www.example.com/products   /home /about
* body
  * whatever content gets sent

### Response
* status code
  * 1xx => low-level routing
  * 2xx => everything is okay
  * 3xx => redirection
  * 4xx => client has made a mistake
  * 5xx => there's something wrong with the server
* body

```js
// TCP server
const net = require('net');

const server = net.createServer();
const port = 4001;

server.on('connection', (connection) => {});

server.listen(port);
```

```js
// HTTP server
const http = require('http');

const server = http.createServer();
const port = 4001;

server.on('request', (request, response) => {});

server.listen(port);
```

### Middleware
* code that sits between the request and the response
* function
* parsing => turning data from one format to another

                                server
client <========== tcp/http => middleware <===> middleware <====> route handler
response
                              body-parser       cookie-parser
                              request.body      request.cookies
                              next()            next()





















