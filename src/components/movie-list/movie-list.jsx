import React from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {moviesPropTypes} from 'Store/prop-types';


const MovieList = (props) => {
  const {movies, onMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieCardClick={onMovieCardClick}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: moviesPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
};


export default MovieList;
