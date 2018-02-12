import {all, fork} from "redux-saga/effects";
import {watchUpdateFilms} from "./FilmSaga";
import {watchUpdateSelectedMovie} from "./SelectedFilmSaga";

export default function* RootSaga(){
  yield all([
    fork(watchUpdateFilms),
    fork(watchUpdateSelectedMovie)
  ]);
};