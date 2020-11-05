import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeGenre} from 'Store/action';
import {getGenres} from 'Store/selector';


const GenreList = (props) => {
  const {currentGenre, genres, changeGenreAction} = props;

  const handleGenreClick = (genre) => {
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
            onClick={() => handleGenreClick(genre)}
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

const mapStateToProps = ({moviesState, data}) => ({
  currentGenre: moviesState.currentGenre,
  genres: getGenres(data.movies),
});

const mapDispatchToProps = {
  changeGenreAction: changeGenre,
};


export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
