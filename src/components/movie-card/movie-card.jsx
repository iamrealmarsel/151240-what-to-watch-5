import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from 'VideoPlayer/video-player';
import {moviePropTypes} from 'Store/prop-types';
import withMovieCardState from 'Hocs/with-movie-card-state';


const MovieCard = (props) => {
  const {movie, onMovieCardClick, onMouseEnter, onMouseLeave, isVideo, playVideo} = props;
  const {title, preview, previewVideo, id} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onMovieCardClick(id)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          previewVideo={previewVideo}
          preview={preview}
          title={title}
          isVideo={isVideo}
          playVideo={playVideo}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviePropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  playVideo: PropTypes.func.isRequired,
  isVideo: PropTypes.bool.isRequired,
};


export default withMovieCardState(MovieCard);
