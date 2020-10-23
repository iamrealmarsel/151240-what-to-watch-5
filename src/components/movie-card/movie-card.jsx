import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';
import {moviePropTypes} from '../prop-types';


class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoElement: null,
      isVideo: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  handleMouseEnter() {
    this.setState({isVideo: true});
  }

  handleMouseLeave() {
    this.setState({isVideo: false});
    this.stopVideo();
  }

  playVideo(element) {
    if (element) {
      this.timeoutID = setTimeout(() => element.play(), 1000);
    }
  }

  stopVideo() {
    clearTimeout(this.timeoutID);
  }

  render() {
    const {movie, onMovieCardClick} = this.props;
    const {title, preview, previewVideo, id} = movie;
    const {isVideo} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => onMovieCardClick(id)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            previewVideo={previewVideo}
            preview={preview}
            title={title}
            isVideo={isVideo}
            playVideo={this.playVideo}
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: moviePropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
};


export default MovieCard;
