import React from 'react';
import PropTypes from 'prop-types';
import {checkTextValidation} from 'utils';
import {SHAKE_ANIMATION_TIMEOUT} from 'const';


const withReviewState = (Component) => {

  class WithReviewState extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        ratingStarsChecks: [false, false, true, false, false],
        text: ``,
        disabledButton: true,
        disabledTextArea: false,
        errorShake: false,
      };
      this.handleStarClick = this.handleStarClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.postCommentAction = this.props.postCommentAction;
      this.id = Number(this.props.match.params.id);
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
        disabledButton: checkTextValidation(text),
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      const rating = this.state.ratingStarsChecks.indexOf(true) + 1;
      const text = this.state.text;

      this.setState({
        disabledButton: true,
        disabledTextArea: true,
      });

      this.postCommentAction(rating, text, this.id)
        .then(() => {
          this.setState({
            disabledButton: false,
            disabledTextArea: false,
          });
        })
        .catch(() => {
          this.setState({
            disabledButton: false,
            disabledTextArea: false,
          });
          this.reportError();
        });
    }

    reportError() {
      this.setState({errorShake: true});
      setTimeout(() => this.setState({errorShake: false}), SHAKE_ANIMATION_TIMEOUT);
    }

    render() {
      const {ratingStarsChecks, text, disabledButton, disabledTextArea, errorShake} = this.state;

      return <Component
        {...this.props}
        id={this.id}
        text={text}
        errorShake={errorShake}
        disabledButton={disabledButton}
        disabledTextArea={disabledTextArea}
        ratingStarsChecks={ratingStarsChecks}
        onTextChange={this.handleTextChange}
        onStarClick={this.handleStarClick}
        onSubmit={this.handleSubmit}
      />;
    }
  }

  WithReviewState.propTypes = {
    match: PropTypes.object.isRequired,
    postCommentAction: PropTypes.func.isRequired,
  };

  return WithReviewState;
};


export default withReviewState;
