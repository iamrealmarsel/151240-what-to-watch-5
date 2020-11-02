import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieList from 'MovieList/movie-list';
import {ALIKE_MOVIE_COUNT} from 'Src/const';
import {moviesPropTypes, reviewsPropTypes} from 'Components/prop-types';
import Tabs from 'Tabs/tabs';


const getAlikeMovies = (movies, currentMovie) => {
  const totalAlikeMovies =
    movies.filter((movie) => movie.id !== currentMovie.id && movie.genre === currentMovie.genre);

  if (totalAlikeMovies.length <= 4) {
    return totalAlikeMovies;
  }

  let alikeMovies = [];

  for (let i = 0; i < ALIKE_MOVIE_COUNT; i++) {
    alikeMovies.push(totalAlikeMovies[i]);
  }

  return alikeMovies;
};

const Movie = (props) => {
  const {movies, reviews, onMovieCardClick, match} = props;
  const id = Number(match.params.id);
  const currentMovie = movies.find((movie) => movie.id === id);
  const alikeMovies = getAlikeMovies(movies, currentMovie);
  const {title, genre, releaseYear} = currentMovie;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn movie-card__button" to={`/films/${id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster"
                width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <Tabs movie={currentMovie} reviews={reviews} />

            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={alikeMovies} onMovieCardClick={onMovieCardClick} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  movies: moviesPropTypes,
  reviews: reviewsPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  reviews: state.reviews,
});


export default connect(mapStateToProps)(Movie);
