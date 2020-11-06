import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from 'components/main/main';
import SignIn from 'components/sign-in/sign-in';
import MyList from 'components/my-list/my-list';
import Movie from 'components/movie/movie';
import Review from 'components/review/review';
import Player from 'components/player/player';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'
          render={({history}) => (
            <Main onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'
          render={({history}) => (
            <MyList onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/films/:id'
          render={({history, match}) => (
            <Movie match={match}
              onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/films/:id/review'
          render={({match}) => (
            <Review match={match}/>
          )}
        />
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
