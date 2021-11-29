import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import createSagaMiddleWare from 'redux-saga';

import auth from './sagas/auth';
import hotels from './sagas/hotels';
import favorites from './sagas/favorites';

const sagaMiddleware = createSagaMiddleWare();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
);

sagaMiddleware.run(auth);
sagaMiddleware.run(hotels);
sagaMiddleware.run(favorites);

export default store;
