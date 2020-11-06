import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from 'services/api';
import App from 'components/app/app';
import {reviews} from 'mocks/movies';
import rootReducer from 'store/root-reducer';


const api = createAPI();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
