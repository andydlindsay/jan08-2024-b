const fs = require('fs');
const axios = require('axios');

fs.readFile('/tmp/path.txt').then((data)=>{
	console.log('file contents:', data);
});

//
//
//

axios.get('http://example.com/monkeyfuzz.html')
.then((response)=>{
	console.log('response.data', response.data);
})
.catch((error)=>{
	console.log('error:', error);
});

