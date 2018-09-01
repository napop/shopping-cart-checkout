// import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
// import Thunk
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inittialState = {};

const middleware = [thunk];

const store = createStore (
    rootReducer,
    inittialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolExtension ? window.devToolExtension() : f => f
    )
)

export default store;