const net = require('net');

const server = net.createServer();
const port = 1338; // 1337 3000 

// server.setEncoding('utf-8');

// console.log(server);

const connections = [];

server.on('connection', function(connection) {
  console.log('someone joined the server');

  connections.push(connection);
  connection.username = 'alice'

  // send a message to the client
  connection.write('welcome to the chat server');

  // set the character encoding to utf-8
  connection.setEncoding('utf-8');

  // listen for incoming messages
  connection.on('data', function(data) {
    console.log('client says:', data);

    // loop through all connection clients and "echo" the message
    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(`${connection.username} says ${data}`);
      }
    }
  });
});

server.listen(port, function() {
  console.log(`server is listening on port ${port}`);
});
