const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8002;

// middleware
app.use((request, response, next) => {
  // console.log('inside the custom middleware');

  next(); // call the next middleware in line
});

// const morganMiddleware = morgan('dev'); // (request, response, next) => {}
// app.use(morganMiddleware);
app.use(morgan('dev'));

// GET /home
app.get('/home', (request, response) => {
  // console.log('someone visited the home page');

  if (true) {
    return response.send('does this work????');
  }

  response.send('this is the home page');
});

// GET /about
app.get('/about', (request, response) => {
  response.send('more about us!!!!');
});

app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
