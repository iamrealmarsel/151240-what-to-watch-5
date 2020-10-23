import PropTypes from "prop-types";


export const moviesPropTypes = PropTypes.arrayOf(PropTypes.shape({
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
})).isRequired;

export const moviePropTypes = PropTypes.shape({
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
}).isRequired;
