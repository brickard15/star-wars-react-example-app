import React, { Component } from 'react';
import '../App.css';
import Header from "../components/Header";
import Films from "../components/Films";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getFilms} from "../actions/FilmActions";
import MovieDetails from '../components/MovieDetails'
import {updateSelectedMovie} from "../actions/SelectedMovieActions";

class App extends Component {

  componentDidMount(){
    const {dispatch} = this.props;
    const boundGetFilms = bindActionCreators(getFilms, dispatch);
    boundGetFilms();
  }


  render(){
    const {dispatch} = this.props;
    const callGetFilm = bindActionCreators(updateSelectedMovie, dispatch);

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Films films={this.props.Films} CallGetFilm={callGetFilm} />}/>
            <Route path="/movie-details" render={() => <MovieDetails  MovieDetails={this.props.SelectedMovie} />}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return({
    Films: state.FilmReducer.films,
    SelectedMovie: state.SelectedMovieReducer
  });
};

export default connect(mapStateToProps)(App);
