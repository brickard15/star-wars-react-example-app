import {updateSelectedMovieSuccess} from "../actions/SelectedMovieActions";
import {call, put, takeEvery} from "redux-saga/effects";
import {UPDATE_SELECTED_MOVIE} from "../actionTypes/SelectedMovieActionTypes";
import {getFilm} from "../api/StarWarsApi";

function* callGetFilmApi(action) {
  const film = yield call(getFilm, action.url);

  const mutatedFilm = {
    title: film.title,
    date: film.release_date,
    crawl: film.opening_crawl
  };

  yield put(updateSelectedMovieSuccess(mutatedFilm));
}

export function* watchUpdateSelectedMovie() {
  yield takeEvery(UPDATE_SELECTED_MOVIE, callGetFilmApi);
};