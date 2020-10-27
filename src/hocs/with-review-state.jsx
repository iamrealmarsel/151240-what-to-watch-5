import React from 'react';


const withReviewState = (Component) => {
  class WithReviewState extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        ratingStarsChecks: [false, false, true, false, false],
        text: ``,
      };
      this.handleStarClick = this.handleStarClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleStarClick(checked, index) {
      const newRatingStarsCheked = Array(5).fill(false);
      newRatingStarsCheked[index] = checked;
      this.setState({
        ratingStarsChecks: newRatingStarsCheked,
      });
    }

    handleTextChange(text) {
      this.setState({
        text,
      });
    }

    render() {
      const {ratingStarsChecks, text} = this.state;

      return <Component
        {...this.props}
        text={text}
        ratingStarsChecks={ratingStarsChecks}
        onTextChange={this.handleTextChange}
        onStarClick={this.handleStarClick}
      />;
    }
  }

  return WithReviewState;
};


export default withReviewState;
