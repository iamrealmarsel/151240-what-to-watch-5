import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import RatingStars from '../rating-stars/rating-stars';
import {generateId} from '../../utils.js';
import {connect} from 'react-redux';
import {moviesPropTypes} from '../prop-types';


class Review extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ratingStarsChecks: [false, false, true, false, false],
      text: ``,
    };
  }

  handleStarClick(checked, index) {
    const newRatingStarsCheked = Array(5).fill(false);
    newRatingStarsCheked[index] = checked;
    this.setState({
      ratingStarsChecks: newRatingStarsCheked,
    });
  }

  handleFormSubmit() {}

  handleTextChange(text) {
    this.setState({
      text,
    });
  }

  render() {
    const ratingStarsChecks = this.state.ratingStarsChecks;
    const id = Number(this.props.match.params.id);
    const currentMovie = this.props.movies.find((movie) => movie.id === id);
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
          <form action="#" className="add-review__form" onSubmit={() => this.handleFormSubmit()}>
            <div className="rating">
              <div className="rating__stars">
                {ratingStarsChecks.map((starCheck, index) => (
                  <RatingStars
                    key={generateId()}
                    index={index}
                    starCheck={starCheck}
                    onStarClick={(checked) => this.handleStarClick(checked, index)} />
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                onChange={(event) => this.handleTextChange(event.target.value)} >
              </textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

Review.propTypes = {
  movies: moviesPropTypes,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
  {
    movies: state.movies,
  }
);


export default connect(mapStateToProps)(Review);
