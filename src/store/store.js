import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const development = process.env.NODE_ENV === 'development';

const middleware = [thunk, development && logger].filter(Boolean);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
