const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 54321;

const users = {
  abc: {
    id: "abc",
    username: "alice",
    password: "1234",
  },
  def: {
    id: "def",
    username: "bob",
    password: "5678",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body
app.use(cookieParser()); // creates and populates req.cookies

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // pull the info off the body
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT provide a username and password?
  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  // lookup the user based on their username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      foundUser = user;
    }
  }

  // did we NOT find a user?
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // yay! happy path!

  // set a cookie
  res.cookie('userId', foundUser.id);

  // redirect the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId from the cookies
  const userId = req.cookies.userId;

  // do they NOT have a cookie?
  if (!userId || !users[userId]) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // happy path!

  // lookup the user based on their cookie
  const user = users[userId];

  const templateVars = {
    // user: user,
    username: user.username,
  };

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  res.clearCookie('userId');

  // send the user somewhere
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // pull the info off the body
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT provide a username and password?
  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  // look for a user with the provided username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      foundUser = user;
    }
  }

  // did we find a user
  if (foundUser) {
    return res.status(400).send('a user with that username already exists');
  }

  // the username is unique!

  // create a new user object
  const id = Math.random().toString(36).substring(2, 5);

  const user = {
    id: id,
    username: username,
    password: password,
  };

  users[id] = user;

  console.log(users);

  // do we set a cookie or not?
  // res.cookie('userId', user.id);

  // send the user somewhere
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
