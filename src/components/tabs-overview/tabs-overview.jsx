import React from 'react';
import {moviePropTypes} from 'Store/prop-types';


const TabsOverview = (props) => {
  const {rating, ratingText, votes, description, director, starringShort} = props.movie;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingText}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starringShort.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

TabsOverview.propTypes = {
  movie: moviePropTypes,
};


export default TabsOverview;
