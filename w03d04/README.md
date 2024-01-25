# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* plain-text password => hashing algo => 'dsafhsdkfhaksdfhaksdhfaks'
* one-way process
* bcrypt

'12345678' => algo => hash
'12345678' + 'afhsdkfhaksdhf' => algo => hash

### Encyrption
* two way process

plaintext cookie => encryption algo => encrypted cookie
encrypted cookie => decryption algo => plaintext cookie


before
beforeEach
after(() => {})
afterEach

```js
// setting
res.cookie('key', 'value');
req.session['key'] = 'value';

// reading
req.cookies['key']
req.session['key']

// clearing
res.clearCookie('key');
req.session['key'] = null;
req.session = null;
```




http://localhost:54321/login

Monster in the Middle (MitM)

HTTPS
HTTP Secure

### Asymetric Encryption
* public/private key system
* public key is avail to everyone
* private is stored on the server


https://www.google.com/


### REST
* naming convention for routes
* RESTful
* all resources are plural `users`, `maps`, `pins`
* actions are singular
* REpresentational State Transfer

GET /all-the-urls
GET /just-one-url/:id

authors
books

GET /books
GET /authors/:id/books
GET /orders/:id/products

POST /login

Browse  GET   /urls
Read    GET   /urls/:id
Edit    POST  /urls/:id
Add     POST  /urls
Delete  POST  /urls/:id/delete

Browse  GET     /urls
Read    GET     /urls/:id
Edit    PATCH   /urls/:id
Add     POST    /urls
Delete  DELETE  /urls/:id

### More Verbs!!!
* PUT => replace a resource completely
* PATCH => replace a piece of a resource
* DELETE => delete a resource

app.put()

<div>
<article>
<aside>
<header>


let a = 5
let age = 5



req.method = 'DELETE'
req.url

(req, res, next) => {}

app.delete



