import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';
import MovieList from '../movie-list/movie-list';
import {MOVIE_COUNT_STEP} from '../../const';
import {moviesPropTypes} from '../prop-types';
import {getMoviesByGenre} from '../../utils.js';


class MovieListAndShowMoreButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.onMovieCardClick = this.props.onMovieCardClick;
    this.isEnableShowMoreButton = false;
    this.movieCountRender = MOVIE_COUNT_STEP;
    this.currentGenre = this.props.currentGenre;
    this.movies = this.props.movies;

    if (this.movies.length > MOVIE_COUNT_STEP) {
      this.isEnableShowMoreButton = true;
      this.movies = this.movies.slice(0, MOVIE_COUNT_STEP);
    } else {
      this.isEnableShowMoreButton = false;
      this.movies = this.movies;
    }
  }

  handleButtonClick() {
    this.movieCountRender += MOVIE_COUNT_STEP;
    this.movies = this.props.movies;
    this.movies = this.movies.slice(0, this.movieCountRender);

    if (this.props.movies.length <= this.movieCountRender) {
      this.isEnableShowMoreButton = false;
    }

    this.forceUpdate();
  }

  render() {
    if (this.currentGenre !== this.props.currentGenre) {
      this.movies = this.props.movies;
      if (this.movies.length > MOVIE_COUNT_STEP) {
        this.isEnableShowMoreButton = true;
        this.movies = this.movies.slice(0, MOVIE_COUNT_STEP);
      } else {
        this.isEnableShowMoreButton = false;
        this.movies = this.movies;
      }
      this.currentGenre = this.props.currentGenre;
      this.movieCountRender = MOVIE_COUNT_STEP;
    }

    return (
      <React.Fragment>
        <MovieList movies={this.movies} onMovieCardClick={this.onMovieCardClick} />

        {
          (this.isEnableShowMoreButton)
            ? <ShowMoreButton onButtonClick={this.handleButtonClick} />
            : ``
        }
      </React.Fragment>
    );
  }
}

MovieListAndShowMoreButton.propTypes = {
  movies: moviesPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    movies: getMoviesByGenre(state.movies, state.currentGenre),
    currentGenre: state.currentGenre,
  }
);


export default connect(mapStateToProps)(MovieListAndShowMoreButton);
