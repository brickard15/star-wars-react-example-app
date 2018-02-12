import {combineReducers} from "redux";
import FilmReducer from "./FilmsReducer";
import SelectedMovieReducer from './SelectedMovieReducer'

const RootReducer = combineReducers(
    {
      FilmReducer,
      SelectedMovieReducer
    }
  );

export default RootReducer