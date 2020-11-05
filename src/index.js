import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from 'Services/api';
import App from 'App/app';
import {reviews} from 'Mocks/movies';
import rootReducer from 'Store/root-reducer';
import {fetchMovies, fetchMoviePromo} from 'Store/api-action';


const api = createAPI();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

Promise.all([
  store.dispatch(fetchMovies()),
  store.dispatch(fetchMoviePromo()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App reviews={reviews} />
      </Provider>,
      document.querySelector(`#root`)
  );
});
