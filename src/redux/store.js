import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import mainReducer from './reducers';

export default createStore(
  mainReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
