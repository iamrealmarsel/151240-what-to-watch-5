import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';


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
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingText: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starringShort: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    myList: PropTypes.bool.isRequired,
  }).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};


export default MovieCard;
