import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { render } from 'react-dom';
import analyzeReducer from './reducers/analyzeReducer';
import ImagePreviewer from './containers/ImagePreviewer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const store = createStore(
    analyzeReducer,
    applyMiddleware(thunk, logger)
);

render(
    <Provider store={store}>
        <ImagePreviewer />
    </Provider>,
    document.getElementById('root')
);
