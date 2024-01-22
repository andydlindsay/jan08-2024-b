// HTTP server
const http = require('http');

const server = http.createServer();
const port = 4001;

server.on('request', (request, response) => {
  console.log(request.method, request.url);

  const method = request.method;
  const url = request.url;
  
  if (method === 'GET' && url === '/home') {
    response.write('this is the home page');
  } else if (method === 'GET' && url === '/about') {
    response.write('more about us!');
  } else {
    response.write('page not found :(');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
