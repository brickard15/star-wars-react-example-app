import axios from 'axios';

export function getFilms(){
  return axios.get("https://www.swapi.co/api/films")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
};

export function getFilm(url) {
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}