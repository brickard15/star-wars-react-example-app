import {GET_FILMS, UPDATE_FILMS} from "../actionTypes/FilmActionTypes";

export const getFilms = () => {
  return {
    type: GET_FILMS
  }
};

export const updateFilms = films =>{
  return {
    type: UPDATE_FILMS,
    films: films,
  }
};