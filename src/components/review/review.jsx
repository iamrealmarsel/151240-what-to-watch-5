import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import RatingStars from '../rating-stars/rating-stars';
import {generateId} from '../../utils.js';
import {connect} from 'react-redux';
import {moviesPropTypes} from '../prop-types';
import withReviewState from '../../hocs/with-review-state';


const Review = (props) => {
  const {ratingStarsChecks, onTextChange, onStarClick, match, movies} = props;
  const id = Number(match.params.id);
  const currentMovie = movies.find((movie) => movie.id === id);
  const {title, background, poster} = currentMovie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {ratingStarsChecks.map((starCheck, index) => (
                <RatingStars
                  key={generateId()}
                  index={index}
                  starCheck={starCheck}
                  onStarClick={(checked) => onStarClick(checked, index)} />
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
              onChange={(event) => onTextChange(event.target.value)} >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

Review.propTypes = {
  movies: moviesPropTypes,
  match: PropTypes.object.isRequired,
  ratingStarsChecks: PropTypes.array.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});


export default connect(mapStateToProps)(withReviewState(Review));
