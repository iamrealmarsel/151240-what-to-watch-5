import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStars from 'components/rating-stars/rating-stars';
import Header from 'components/header/header';
import {generateId} from 'utils.js';
import {moviesPropTypes} from 'store/prop-types';
import withReviewState from 'hocs/with-review-state';
import {getMovieByID} from 'store/selector';


const Review = (props) => {
  const {
    ratingStarsChecks, onTextChange, onSubmit, onStarClick,
    movies, id, disabledButton, disabledTextArea, errorShake
  } = props;
  const currentMovie = getMovieByID(movies, id);
  const {title, background, poster} = currentMovie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header id={id} movieTitle={title} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="" className={`add-review__form ${errorShake ? `shake` : ``} `} onSubmit={onSubmit} >
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
              onChange={(event) => onTextChange(event.target.value)}
              disabled={disabledTextArea} >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={disabledButton} >Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

Review.propTypes = {
  movies: moviesPropTypes,
  ratingStarsChecks: PropTypes.array.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onStarClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  disabledButton: PropTypes.bool.isRequired,
  disabledTextArea: PropTypes.bool.isRequired,
  errorShake: PropTypes.bool.isRequired,
};

const mapStateToProps = ({load}) => ({
  movies: load.movies,
});


export {Review};
export default connect(mapStateToProps)(withReviewState(Review));
