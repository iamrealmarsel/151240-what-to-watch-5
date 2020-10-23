import React from 'react';
import {moviePropTypes, reviewsPropTypes} from '../prop-types';
import {Tab} from '../../const';
import TabsOverview from '../tabs-overview/tabs-overview';
import TabsDetails from '../tabs-details/tabs-details';
import TabsReviews from '../tabs-reviews/tabs-reviews';


class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.state = {
      tab: Tab.OVERVIEW
    };
  }

  handleTabClick(event) {
    event.preventDefault();
    this.setState({
      tab: event.currentTarget.dataset.tab,
    });
  }

  render() {
    const {tab} = this.state;
    const {movie, reviews} = this.props;
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
              <a href="#" className="movie-nav__link" onClick={this.handleTabClick} data-tab={Tab.OVERVIEW}>
                {Tab.OVERVIEW}
              </a>
            </li>
            <li className={`movie-nav__item ${tab === Tab.DETAILS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={this.handleTabClick} data-tab={Tab.DETAILS}>
                {Tab.DETAILS}
              </a>
            </li>
            <li className={`movie-nav__item ${tab === Tab.REVIEWS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={this.handleTabClick} data-tab={Tab.REVIEWS}>
                {Tab.REVIEWS}
              </a>
            </li>
          </ul>
        </nav>
        {tabContent}
      </React.Fragment>

    );
  }
}

Tabs.propTypes = {
  movie: moviePropTypes,
  reviews: reviewsPropTypes,
};


export default Tabs;
