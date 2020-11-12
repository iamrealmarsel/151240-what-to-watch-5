import React from 'react';
import PropTypes from 'prop-types';
import GenreList from 'components/genre-list/genre-list';
import Promo from 'components/promo/promo';
import MovieListContainer from 'components/movie-list-container/movie-list-container';


const Main = (props) => {
  const {onMovieCardClick} = props;

  return (
    <React.Fragment>

      <Promo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />
          <MovieListContainer onMovieCardClick={onMovieCardClick}/>

        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,
};


export default Main;
