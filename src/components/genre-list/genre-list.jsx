import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeGenre} from '../../store/action';
import {getGenres} from '../../store/selector';


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

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: getGenres(state.movies),
});

const mapDispatchToProps = {
  changeGenreAction: changeGenre,
};


export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
