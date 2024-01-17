// stdin => standard way that information is input into the application

process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(data) {
  console.log('you typed', data.trim());
});
