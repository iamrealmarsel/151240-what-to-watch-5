import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {movies, reviews} from './mocks/movies';
import reducer from "./store/reducer";


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <App movies={movies} reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
