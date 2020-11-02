import React from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes, reviewsPropTypes} from 'Components/prop-types';
import {Tab} from 'Src/const';
import TabsOverview from 'TabsOverview/tabs-overview';
import TabsDetails from 'TabsDetails/tabs-details';
import TabsReviews from 'TabsReviews/tabs-reviews';
import withTabState from 'Hocs/with-tab-state';


const Tabs = (props) => {
  const {movie, reviews, onTabClick, tab} = props;
  let tabContent = null;

  switch (tab) {
    case Tab.OVERVIEW:
      tabContent = <TabsOverview movie={movie} />;
      break;
    case Tab.DETAILS:
      tabContent = <TabsDetails movie={movie} />;
      break;
    case Tab.REVIEWS:
      tabContent = <TabsReviews reviews={reviews} />;
      break;
  }

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${tab === Tab.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onTabClick} data-tab={Tab.OVERVIEW}>
              {Tab.OVERVIEW}
            </a>
          </li>
          <li className={`movie-nav__item ${tab === Tab.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onTabClick} data-tab={Tab.DETAILS}>
              {Tab.DETAILS}
            </a>
          </li>
          <li className={`movie-nav__item ${tab === Tab.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={onTabClick} data-tab={Tab.REVIEWS}>
              {Tab.REVIEWS}
            </a>
          </li>
        </ul>
      </nav>
      {tabContent}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  movie: moviePropTypes,
  reviews: reviewsPropTypes,
  onTabClick: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};


export default withTabState(Tabs);
