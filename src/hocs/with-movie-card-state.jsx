import React from 'react';


const withMovieCardState = (Component) => {
  class WithMovieCardState extends React.PureComponent {
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
      const {isVideo} = this.state;

      return <Component
        {...this.props}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        isVideo={isVideo}
        playVideo={this.playVideo}
      />;
    }
  }

  return WithMovieCardState;
};


export default withMovieCardState;
