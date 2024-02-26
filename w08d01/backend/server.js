const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const videogames = require('./data/videogames');
const genres = require('./data/genres');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../frontend/build'));
// app.use(cors());

// GET /api/videogames
app.get('/api/videogames', (req, res) => {
  const videogameArr = Object.values(videogames);
  res.json(videogameArr);
});

// GET /api/genres
app.get('/api/genres', (req, res) => {
  res.json(genres);
});

// GET /api/videogames/:id
app.get('/api/videogames/:id', (req, res) => {
  const id = req.params.id;
  const videogame = videogames[id];
  res.json(videogame);
});

// POST /api/videogames
app.post('/api/videogames', (req, res) => {
  const {title, rating, description, releaseDate, genreId} = req.body;

  const id = Math.random().toString(36).substring(2, 5); // fg8

  const newVideogame = {
    id,
    title,
    rating,
    description,
    releaseDate,
    genreId,
  };

  videogames[id] = newVideogame;
  console.log(videogames);

  // respond with the new videogame
  res.json(newVideogame);
  // res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
