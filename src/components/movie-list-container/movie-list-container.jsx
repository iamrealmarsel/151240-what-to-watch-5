import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ShowMoreButton from '../show-more-button/show-more-button';
import MovieList from '../movie-list/movie-list';
import {MOVIE_COUNT_STEP} from '../../const';
import {moviesPropTypes} from '../prop-types';
import {getMoviesByGenre, getVisibleMovies, isEnableShowMoreButton} from '../../utils.js';
import {showMoreMovies} from '../../store/action';


const MovieListContainer = (props) => {
  const {movies, visibleMoviesCount, showMoreMoviesAction, onMovieCardClick} = props;
  const visibleMovies = getVisibleMovies(movies, visibleMoviesCount);
  const showMoreButton = isEnableShowMoreButton(movies, visibleMoviesCount);

  const handleButtonClick = () => {
    showMoreMoviesAction(visibleMoviesCount + MOVIE_COUNT_STEP);
  };

  return (
    <React.Fragment>
      <MovieList movies={visibleMovies} onMovieCardClick={onMovieCardClick} />

      {
        (showMoreButton)
          ? <ShowMoreButton onButtonClick={handleButtonClick} />
          : ``
      }
    </React.Fragment>
  );
};

MovieListContainer.propTypes = {
  movies: moviesPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
  visibleMoviesCount: PropTypes.number.isRequired,
  showMoreMoviesAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  visibleMoviesCount: state.visibleMoviesCount,
  movies: getMoviesByGenre(state.movies, state.currentGenre),
});

const mapDispatchToProps = {
  showMoreMoviesAction: showMoreMovies,
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
