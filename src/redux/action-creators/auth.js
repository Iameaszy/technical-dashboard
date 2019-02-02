import axios from 'axios';
import authActions from '../actions/auth';
import { saveToken, retrieveToken, clearToken } from '../../helpers/token';
import endpoints from '../../endpoints';
import { extractMessage } from '../../helpers/utils';
import modal_actions from '../actions/modals';

export const signin = obj => (dispatch) => {
  dispatch({ type: authActions.SIGNIN_REQUEST });

  axios({
    url: endpoints.SIGNIN,
    method: 'POST',
    data: obj,
  })
    .then((res) => {
      saveToken('ls', res.data.token);

      dispatch({
        type: authActions.SIGNIN_SUCCESSFUL,
        data: res.data,
      });

      dispatch({
        type: modal_actions.SHOW_NOTHING,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.SIGNIN_FAILED,
        message: extractMessage(res),
      });
    });
};

export const verify = (userid, force) => {
  const token = retrieveToken();
  if (force === true || token) {
    return (dispatch) => {
      dispatch({ type: authActions.VERIFY_TOKEN_REQUEST });
      axios({
        url: endpoints.VERIFY,
        method: 'GET',
        headers: {
          authorization: retrieveToken(),
          secondary_authorization:
            force === true
              ? 'asosjfeoarfgjrifgewpfofk329130293edhj3289r09213rjfijjq09'
              : '',
          userid,
        },
      })
        .then((res) => {
          if (res.data.token) {
            saveToken('ls', res.data.token);
          }

          dispatch({
            type: authActions.VERIFY_TOKEN_SUCCESSFUL,
            data: res.data,
          });

          dispatch({
            type: modal_actions.SHOW_NOTHING,
          });
        })
        .catch((res) => {
          clearToken();
          dispatch({
            type: authActions.VERIFY_TOKEN_FAILED,
            message: extractMessage(res),
          });
        });
    };
  }
  return {
    type: authActions.VERIFY_TOKEN_FAILED,
  };
};

export const signup = obj => (dispatch) => {
  dispatch({ type: authActions.SIGNUP_REQUEST });

  axios({
    url: endpoints.SIGNUP,
    method: 'POST',
    data: obj,
  })
    .then((res) => {
      saveToken('ls', res.data.token);
      dispatch({
        type: authActions.SIGNUP_SUCCESSFUL,
        data: res.data,
      });

      dispatch({
        type: modal_actions.SHOW_NOTHING,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.SIGNUP_FAILED,
        message: extractMessage(res),
      });
    });
};

export const update = (obj, type) => (dispatch) => {
  dispatch({ type: authActions.UPDATE_REQUEST });

  axios({
    url: endpoints.UPDATE,
    method: 'PUT',
    data: obj,
    headers: {
      authorization: retrieveToken(),
      type,
    },
  })
    .then((res) => {
      if (res.data.user) {
        saveToken('ls', res.data.user.token);
      }
      dispatch({
        type: authActions.UPDATE_SUCCESSFUL,
        data: res.data.user,
        message: res.data.message,
      });

      dispatch({
        type: modal_actions.SHOW_NOTHING,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.UPDATE_FAILED,
        message: extractMessage(res),
      });
    });
};

export const social_auth = (obj, social_type) => (dispatch) => {
  dispatch({ type: authActions.SIGNIN_REQUEST });

  axios({
    url: endpoints.SIGNIN,
    method: 'POST',
    data: obj,
    headers: {
      type: 's',
      social_type,
    },
  })
    .then((res) => {
      saveToken('ls', res.data.token);

      dispatch({
        type: authActions.SIGNIN_SUCCESSFUL,
        data: res.data,
      });

      dispatch({
        type: modal_actions.SHOW_NOTHING,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.SIGNIN_FAILED,
        message: extractMessage(res),
      });
    });
};
export const signout = () => {
  clearToken();
  return (dispatch) => {
    dispatch({ type: authActions.SIGNOUT });
    dispatch({ type: modal_actions.SHOW_NOTHING });
  };
};

export const forget_password = obj => (dispatch) => {
  dispatch({ type: authActions.FORGOT_PASSWORD_REQUEST });
  axios({
    url: endpoints.FORGOT_PASSWORD,
    method: 'POST',
    data: obj,
  })
    .then((res) => {
      dispatch({
        type: authActions.FORGOT_PASSWORD_SUCCESSFUL,
        data: res.data,
      });

      dispatch({
        type: modal_actions.SHOW_NOTHING,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.FORGOT_PASSWORD_FAILED,
        message: extractMessage(res),
      });
    });
};

export const reset_password = (obj, query) => (dispatch) => {
  dispatch({ type: authActions.FORGOT_PASSWORD_REQUEST });
  axios({
    url: endpoints.RESET_PASSWORD + query,
    method: 'PUT',
    data: obj,
  })
    .then((res) => {
      dispatch({
        type: authActions.PASSWORD_RESET_SUCCESSFUL,
        data: res.data,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.PASSWORD_RESET_FAILED,
        message: extractMessage(res),
      });
    });
};

export const verify_email = query => (dispatch) => {
  dispatch({ type: authActions.VERIFY_EMAIL_REQUEST });
  axios({
    url: endpoints.VERIFY_EMAIL + query,
    method: 'GET',
  })
    .then((res) => {
      dispatch({
        type: authActions.VERIFY_EMAIL_SUCCESSFUL,
        message: res.data.message,
        data: res.data.user,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.VERIFY_EMAIL_FAILED,
        message: extractMessage(res),
      });
    });
};
export const get_email_link = (userid, force) => (dispatch) => {
  dispatch({ type: authActions.GET_EMAIL_LINK_REQUEST });
  axios({
    url: endpoints.GET_EMAIL_VERIFICATION_LINK,
    method: 'GET',
    headers: {
      authorization: retrieveToken(),
      secondary_authorization:
          force === true
            ? 'asosjfeoarfgjrifgewpfofk329130293edhj3289r09213rjfijjq09'
            : '',
      userid,
    },
  })
    .then((res) => {
      dispatch({
        type: authActions.GET_EMAIL_LINK_SUCCESSFUL,
        message: res.data.message,
      });
    })
    .catch((res) => {
      dispatch({
        type: authActions.GET_EMAIL_LINK_FAILED,
        message: extractMessage(res),
      });
    });
};
