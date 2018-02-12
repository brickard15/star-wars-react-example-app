import {GET_FILMS} from "../actionTypes/FilmActionTypes";
import {call, put, takeEvery} from "redux-saga/effects";
import {getFilms} from "../api/StarWarsApi";
import {updateFilms} from "../actions/FilmActions";

function* callGetFilmsApi(){
  const films = yield call(getFilms);

  const mutatedFilms = {
    count: films.count,
    films: films.results.map(film => {return {key: film.episode_id, name: film.title, url: film.url}}).sort((film1, film2) => {return film1.key - film2.key})
  };

  yield put(updateFilms(mutatedFilms));
}

export function* watchUpdateFilms(){
  yield takeEvery(GET_FILMS, callGetFilmsApi);
}