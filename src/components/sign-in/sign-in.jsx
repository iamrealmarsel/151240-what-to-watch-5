import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from 'store/actions/async';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import {Title} from 'const';


const SignIn = (props) => {
  const mailRef = React.createRef();
  const passwordRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginAction({
      email: mailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="user-page">

      <Header title={Title.SIGN_IN} noAvatar />

      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit}
          action="" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={mailRef}
                className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef}
                className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />

    </div>
  );
};

SignIn.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loginAction: login,
};


export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
