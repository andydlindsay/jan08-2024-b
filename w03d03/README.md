# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Log user in with email/username and password
- [x] Protecting endpoints against non-logged in users
- [x] Log user out (clearing cookies)
- [x] Register user with email/username and password

### HTTP
* stateless protocol
* neither party is required to remember any previous interactions
* cookies
* key/value pairs stored in the browser at the request of the server
* cookies are sent with every HTTP request
* domain-specific


```js
// setting a cookie
res.cookie('key', 'value');

// reading a cookie
req.cookies['key']

// clearing a cookie
res.clearCookie('key');
```


GET /urls/new
GET /urls/:id



username=alice&password=1234
































