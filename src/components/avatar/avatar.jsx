import React from 'react';
import {Link} from 'react-router-dom';
import connect from 'components/avatar/avatar.connect';
import PropTypes from 'prop-types';


const Avatar = (props) => {
  const {isAuthenticated} = props;

  return (
    <div className="user-block">
      { isAuthenticated
        ? <div className="user-block__avatar">
          <Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
        </div>

        : <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

Avatar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};


export {Avatar};
export default connect(Avatar);
