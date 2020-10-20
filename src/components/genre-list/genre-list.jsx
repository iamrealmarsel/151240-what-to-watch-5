import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getGenres} from '../../utils';
import {changeGenreFilter} from '../../store/action';


const GenreList = (props) => {
  const {movies} = props.state;
  const genres = getGenres(movies);

  console.log(props.state);

  const handleGenreClick = (event) => {
    props.dispatch(changeGenreFilter(Date.now()));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link" onClick={handleGenreClick}>{genre}</a>
        </li>
      ))}
    </ul>
  );
};

// GenreList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//   })).isRequired,
//   test: PropTypes.func.isRequired,
// };


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


export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
