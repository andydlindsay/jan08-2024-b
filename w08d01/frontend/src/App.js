import {useEffect, useReducer} from 'react';
import axios from 'axios';

import './App.css';

// useEffect - keeping our app in sync with an outside resource; document ready

import {reducer, initialState, actions} from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleSubmit = () => {
  //   axios.post('/api/videogames', data)
  //     .then((response) => {
  //       const newVideogame = response.data;
  //     });
  // };

  useEffect(() => {
    const videogamePromise = axios.get('/api/videogames');
    const genrePromise = axios.get('/api/genres');

    const promises = [videogamePromise, genrePromise];

    Promise.all(promises)
      .then((resultsArr) => {
        const videogames = resultsArr[0].data;
        const genres = resultsArr[1].data;

        dispatch({ type: actions.SET_VIDEOGAMES, payload: videogames });
        dispatch({ type: actions.SET_GENRES, payload: genres });
      });
  }, []);

  const mappedVideogames = state.videogames.map((videogame) => {
    return (
      <p key={videogame.id}>
        Title: {videogame.title} (genre: {state.genres[videogame.genreId].genre})
      </p>
    );
  });

  return (
    <div className="App">
      <h2>Videogames are fun!!!!!!</h2>

      { mappedVideogames }
    </div>
  );
};

export default App;
