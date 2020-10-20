import React from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const MovieList = (props) => {
  const {state, onMovieCardClick} = props;
  const {movies} = state;

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
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingText: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starringShort: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    myList: PropTypes.bool.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};


// export default MovieList;

const mapStateToProps = (state) => (
  {
    state,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dispatch,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
