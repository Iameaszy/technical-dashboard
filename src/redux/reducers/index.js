import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modals';
import fish from './fish';
import toggle from './toggle';
import report from './report';

export default combineReducers({
  auth,
  modal,
  fish,
  toggle,
  report,
});
