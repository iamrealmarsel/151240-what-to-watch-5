import React from 'react';
import connect from 'components/genre-list/genre-list.connect';
import PropTypes from 'prop-types';


const GenreList = (props) => {
  const {currentGenre, genres, changeGenreAction} = props;

  const handleGenreClick = (event, genre) => {
    event.preventDefault();
    changeGenreAction(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={
            `catalog__genres-item
            ${currentGenre === genre
          ? `catalog__genres-item--active`
          : ``}`
          }
        >
          <a href="#" className="catalog__genres-link"
            onClick={(event) => handleGenreClick(event, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  changeGenreAction: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};


export {GenreList};
export default connect(GenreList);
