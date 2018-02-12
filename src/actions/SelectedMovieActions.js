import {UPDATE_SELECTED_MOVIE, UPDATE_SELECTED_MOVIE_SUCCESS} from "../actionTypes/SelectedMovieActionTypes";

export const updateSelectedMovie = (url) => {
  return {
    type: UPDATE_SELECTED_MOVIE,
    url
  }
};

export const updateSelectedMovieSuccess = (movieDetails) => {
  return {
    type: UPDATE_SELECTED_MOVIE_SUCCESS,
    movieDetails
  }
}