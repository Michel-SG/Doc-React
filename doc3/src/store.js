import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// mount it on the Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);

// then run the saga
sagaMiddleware.run(mySaga);
