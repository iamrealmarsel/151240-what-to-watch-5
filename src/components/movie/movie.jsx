import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieList from 'components/movie-list/movie-list';
import Tabs from 'components/tabs/tabs';
import Header from 'components/header/header';
import {moviesPropTypes, reviewsPropTypes} from 'store/prop-types';
import {getAlikeMovies} from 'store/selector';
import Footer from 'components/footer/footer';


const Movie = (props) => {
  const {movies, reviews, onMovieCardClick, match} = props;
  const id = Number(match.params.id);
  const currentMovie = movies.find((movie) => movie.id === id);
  const alikeMovies = getAlikeMovies(movies, currentMovie);
  const {title, genre, releaseYear, poster, background} = currentMovie;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

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
              <img src={poster} alt="The Grand Budapest Hotel poster"
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

        <Footer />

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

const mapStateToProps = ({load}) => ({
  movies: load.movies,
  reviews: load.reviews,
});


export default connect(mapStateToProps)(Movie);
