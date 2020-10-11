import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {movies, reviews} from './mocks/movies.js';


ReactDOM.render(<App movies={movies} reviews={reviews} />, document.querySelector(`#root`));
