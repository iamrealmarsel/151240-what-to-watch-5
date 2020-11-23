import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Routing from 'components/routing/routing';
import {init} from 'store/actions/async';


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

const mapStateToProps = ({movies}) => ({
  isApplicationReady: movies.isApplicationReady,
});

const mapDispatchToProps = {
  initAction: init,
};


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
