import {UPDATE_FILMS} from "../actionTypes/FilmActionTypes";

const initialState = {
  films: [],
  count: 0
};

const FilmsReducer = (state = initialState, action) => {
  switch (action.type){
    case UPDATE_FILMS:
      return {
        ...state,
        films: action.films.films,
        count: action.films.count,
      };
    default:
      return state;
  }
};

export default FilmsReducer;