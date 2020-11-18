import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const PrivateRouting = (props) => {
  const {render, isAuthenticated} = props;

  return (
    <Route {...props} render={(routeProps) => (
      isAuthenticated
        ? render(routeProps)
        : <Redirect to='/login' />
    )}
    />
  );
};

PrivateRouting.propTypes = {
  render: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({user}) => ({
  isAuthenticated: user.isAuthenticated,
});


export {PrivateRouting};
export default connect(mapStateToProps)(PrivateRouting);
