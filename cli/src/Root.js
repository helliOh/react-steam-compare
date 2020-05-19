import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './Shared/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

export default Root;