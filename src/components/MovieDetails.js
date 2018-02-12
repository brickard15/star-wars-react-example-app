import React from 'react';
import PropTypes from 'prop-types'

export default class MovieDetails extends React.Component{
  static propTypes = {
    MovieDetails: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Crawl: PropTypes.string.isRequired,
    }).isRequired,
  };

  render(){
    return(
      <div className="Movie-details">
        <h2>{this.props.MovieDetails.Title} ({this.props.MovieDetails.Date})</h2>
        <p>{this.props.MovieDetails.Crawl}</p>
      </div>
    );
  }
}