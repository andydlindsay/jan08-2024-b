const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 54321;

app.use(morgan('dev'));
app.use(express.static('public')); // serve up static assets automatically

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
});
