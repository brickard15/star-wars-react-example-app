import {UPDATE_SELECTED_MOVIE, UPDATE_SELECTED_MOVIE_SUCCESS} from "../actionTypes/SelectedMovieActionTypes";

const initialState = {
  Title: "Initial Title",
  Date: 1900,
  Crawl: "Initial Crawl",
  MovieId: 0,
  Url: ""
};

const SelectedMovieReducer = (state = initialState, action) => {
  switch (action.type){
    case UPDATE_SELECTED_MOVIE:
      return {
        ...state,
        url: action.url,
      };

    case UPDATE_SELECTED_MOVIE_SUCCESS:
      return {
        ...state,
        Title: action.movieDetails.title,
        Date: action.movieDetails.date,
        Crawl: action.movieDetails.crawl,
      };
    default:
      return state;
  }
};

export default SelectedMovieReducer;