import React from 'react';
import connect from 'components/promo/promo.connect';
import {moviePropTypes} from 'store/prop-types';
import Header from 'components/header/header';
import browserHistory from 'browser-history';


const Promo = (props) => {
  const {title, genre, releaseYear, background, poster, id} = props.moviePromo;

  const handleButtonPlayClick = () => {
    browserHistory.push(`/player/${id}`);
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt="The Grand Budapest Hotel" />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={handleButtonPlayClick} className="btn btn--play movie-card__button" type="button">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Promo.propTypes = {
  moviePromo: moviePropTypes,
};


export {Promo};
export default connect(Promo);
