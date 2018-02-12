import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

export default class Films extends Component{

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    CallGetFilm: PropTypes.func.isRequired,
  };

  onClick(event){
    this.props.CallGetFilm(event);
  }

  render(){
    const films = this.props.films.map(film =>
      <li key={film.key}>
        <Link to={`/movie-details/`} onClick={() =>(this.onClick(film.url))}>{film.name}</Link>
      </li>
    );

    return(
      <div className="App-intro">
        <h2>Films</h2>
        <ul>
          {films}
        </ul>
      </div>
    );
  }
}