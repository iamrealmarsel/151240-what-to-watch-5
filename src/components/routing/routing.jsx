import React from 'react';
import {connect} from 'react-redux';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import browserHistory from 'browser-history';
import Main from 'components/main/main';
import SignIn from 'components/sign-in/sign-in';
import MyList from 'components/my-list/my-list';
import Movie from 'components/movie/movie';
import Review from 'components/review/review';
import Player from 'components/player/player';
import PrivateRouting from 'components/private-routing/private-routing';


const Routing = (props) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path='/'
          render={({history}) => (
            <Main onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/login'>
          { props.isAuthenticated
            ? <Redirect to='/' />
            : <SignIn />
          }
        </Route>
        <PrivateRouting exact path='/mylist' render={({history}) => (
          <MyList onMovieCardClick={(id) => history.push(`/films/${id}`)} />
        )} />
        <Route exact path='/films/:id'
          render={({history, match}) => (
            <Movie match={match}
              onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <PrivateRouting exact path='/films/:id/review'
          render={({match}) => (
            <Review match={match}/>
          )}
        />
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </Router>
  );
};

Routing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({user}) => ({
  isAuthenticated: user.isAuthenticated,
});


export default connect(mapStateToProps)(Routing);