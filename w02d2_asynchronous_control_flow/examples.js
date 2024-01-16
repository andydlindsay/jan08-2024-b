const fs = require('fs');
const axios = require('axios');

fs.readFile('/tmp/temp.txt', 'utf8', (error, data) => {
	if (error) {
		console.log("error:", error);
	} else {
		console.log('data:', data);
	}
});


axios.get('http://example.com')
.then((response) => {
	console.log('response.data', response.data);
});


console.log('this is the end of the main thread.');
