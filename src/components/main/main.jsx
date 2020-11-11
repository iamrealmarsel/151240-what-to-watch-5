import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GenreList from 'components/genre-list/genre-list';
import Promo from 'components/promo/promo';
import MovieListContainer from 'components/movie-list-container/movie-list-container';
import {init} from 'store/api-action';


class Main extends React.PureComponent {
  componentDidMount() {
    const {initAction} = this.props;
    initAction();
  }

  render() {
    const {onMovieCardClick, isApplicationReady} = this.props;

    return (
      <React.Fragment>

        {isApplicationReady && <Promo />}

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {isApplicationReady && <GenreList />}
            {isApplicationReady && <MovieListContainer onMovieCardClick={onMovieCardClick}/>}

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
  }
}

Main.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,
  isApplicationReady: PropTypes.bool.isRequired,
  initAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({moviesState}) => ({
  isApplicationReady: moviesState.isApplicationReady,
});

const mapDispatchToProps = {
  initAction: init,
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
