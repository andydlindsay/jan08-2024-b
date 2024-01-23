const express = require('express');
const PORT = 8884;
const app = express();


//
// CONFIG
//
app.set('view engine', 'ejs');


//
// MIDDLEWARE
//
app.use((req, res, next)=>{
	console.log(`${req.method} ${req.url}`);
	next();
});

app.use(express.urlencoded({extended: false}));

// 
// DATABASE
// 
const lengthenedURLs = {
	'f64tgrf6': {
		originalURL: 'http://example.com/',
		lengthenedURL: 'http://example.com/?monkey=fuzz#reality-is-real'
	},
	'd53d63': {
		originalURL: 'http://example.com/blah',
		lengthenedURL: 'http://example.com/blah?fuzz=monkey#reality-is-not-real'
	},
};

//
// ROUTES
//

// Browse
app.get('/', (req, res) => {
	console.log('db:', lengthenedURLs);
	const templateVars = {
		lengthenedURLs: lengthenedURLs
	};
	res.render('home', templateVars);
});

// Add 
app.get('/urls/new', (req, res) => {
	res.render('new');
});

app.post('/urls/new', (req, res) => {
	console.log('req.body', req.body);

	lengthenedURLs[req.body.short] = {
		originalURL: req.body.short,
		lengthenedURL: req.body.long
	};

	res.redirect('/');
});

// Edit
app.get('/urls/:key/edit', (req, res) => {
	const key = req.params.key;
	const templateVars = lengthenedURLs[key];
	templateVars.key = key;
	res.render('edit', templateVars);
});

app.post('/urls/:key/edit', (req, res) => {
	console.log('req.body', req.body);
	const key = req.params.key;
	const short = req.body.short;
	const long = req.body.long;

	lengthenedURLs[key] = {
		originalURL: short,
		lengthenedURL: long
	};

	res.redirect('/');
});

// Read
app.get('/urls/:key', (req, res) => {

	console.log('req.params.key', req.params.key);

	console.log('lengthenedURLs[req.params.key]', lengthenedURLs[req.params.key]);

	// const templateVars = lengthenedURLs[req.params.key];
	const templateVars = {
		short: lengthenedURLs[req.params.key].originalURL,
		long: lengthenedURLs[req.params.key].lengthenedURL
	};

	res.render('urls', templateVars);
});

// Delete
app.get('/urls/:key/delete', (req, res) => {
	const key = req.params.key;
	delete lengthenedURLs[key];
	res.redirect('/');
});


app.listen(PORT, () => {
	console.log(`Server is listening to PORT=${PORT}`);
});