import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Routing from 'components/routing/routing';
import {init} from 'store/api-action';


class App extends React.PureComponent {
  componentDidMount() {
    this.props.initAction();
  }

  render() {
    return this.props.isApplicationReady && <Routing />;
  }
}

App.propTypes = {
  isApplicationReady: PropTypes.bool.isRequired,
  initAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({moviesState}) => ({
  isApplicationReady: moviesState.isApplicationReady,
});

const mapDispatchToProps = {
  initAction: init,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
