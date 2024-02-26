// export const SET_VIDEOGAMES = 'set-videogames';
// export const SET_GENRES = 'set-genres';

export const actions = {
  SET_VIDEOGAMES: 'set-videogames',
  SET_GENRES: 'set-genres',
};

export const reducer = (state, action) => {
  switch(action.type) {
    case actions.SET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    case actions.SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
  
    default:
      throw new Error(`${action.type} is not recognized`);
  }
};

export const initialState = {
  videogames: [],
  genres: [],
};
