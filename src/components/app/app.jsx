import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import {getMyList} from '../../utils.js';


const App = (props) => {
  const {movies, reviews} = props;
  const myList = getMyList(movies);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'
          render={({history}) => (
            <Main movies={movies} onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'
          render={({history}) => (
            <MyList movies={myList} onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/films/:id'
          render={({history, match}) => (
            <Movie movies={movies} reviews={reviews} match={match}
              onMovieCardClick={(id) => history.push(`/films/${id}`)} />
          )}
        />
        <Route exact path='/films/:id/review'
          render={({match}) => (
            <AddReview movies={movies} match={match}/>
          )}
        />
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingText: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starringShort: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    myList: PropTypes.bool.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};


export default App;
