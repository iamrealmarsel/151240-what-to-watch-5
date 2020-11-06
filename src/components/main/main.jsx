import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GenreList from 'components/genre-list/genre-list';
import Promo from 'components/promo/promo';
import MovieListContainer from 'components/movie-list-container/movie-list-container';
import {fetchMoviePromo} from 'store/api-action';
import {enableMoviePromo} from 'store/action';


class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchMoviePromoAction, enableMoviePromoAction} = this.props;

    new Promise((resolve) => {
      resolve(fetchMoviePromoAction());
    }).then(() => enableMoviePromoAction());
  }

  render() {
    const {onMovieCardClick, isEnableMoviePromo} = this.props;

    return (
      <React.Fragment>

        {isEnableMoviePromo && <Promo />}

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
  }
}

Main.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,
  fetchMoviePromoAction: PropTypes.func.isRequired,
  enableMoviePromoAction: PropTypes.func.isRequired,
  isEnableMoviePromo: PropTypes.bool.isRequired,
};

const mapStateToProps = ({moviesState}) => ({
  isEnableMoviePromo: moviesState.isEnableMoviePromo,
});

const mapDispatchToProps = {
  fetchMoviePromoAction: fetchMoviePromo,
  enableMoviePromoAction: enableMoviePromo,
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
