import React from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';


class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieId: null,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(id) {
    this.setState({
      activeMovieId: id,
    });
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onHover={this.handleHover} onMovieCardClick={onMovieCardClick} />
        ))}
      </div>
    );
  }
}

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


export default MovieList;
