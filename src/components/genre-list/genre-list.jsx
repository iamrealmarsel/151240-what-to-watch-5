import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeGenre} from '../../store/action';
import {getGenres} from '../../utils';


const GenreList = (props) => {
  const {currentGenre, genres} = props;

  const handleGenreClick = (event) => {
    event.preventDefault();
    props.dispatch(changeGenre(event.currentTarget.dataset.filter));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item
          ${currentGenre === genre
          ? `catalog__genres-item--active`
          : ``}`
        }>
          <a href="#" className="catalog__genres-link"
            data-filter={genre}
            onClick={handleGenreClick}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: getGenres(state.movies),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});


export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
