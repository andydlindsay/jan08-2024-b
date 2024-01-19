const net = require('net');

const config = {
  port: 1338,
  host: 'localhost'
};

const client = net.createConnection(config);

// console.log(client);

// set the encoding to translate any messages that are received
client.setEncoding('utf-8');

// send a message to the server
client.write('it is nice to be here!');

// setup standard in input
process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(data) {
  // console.log('you typed', data.trim());
  client.write(data.trim());
});

client.on('data', function(data) {
  console.log('server says:', data);
});
