import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from 'App/app';
import {reviews} from 'Mocks/movies';
import reducer from 'Store/reducer';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)
);
