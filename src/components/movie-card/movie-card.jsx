import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieCard = (props) => {
  const {movie, onHover, onMovieCardClick} = props;
  const {title, preview, id} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={() => onMovieCardClick(id)}
      onMouseOver={() => onHover(id)}>
      <div className="small-movie-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};


export default MovieCard;
