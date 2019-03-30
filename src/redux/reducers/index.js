import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modals';
import toggle from './toggle';
import report from './report';
import message from './message';
import notice from './notice';


export default combineReducers({
  auth,
  modal,
  toggle,
  report,
  message,
  notice,
});
