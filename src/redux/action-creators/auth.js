import authActions from '../actions/auth';
import modal_actions from '../actions/modals';
import { Auth, UsersRef } from '../../config/firebase';
import { saveToken, clearToken } from '../../helpers/token';

let authenticatedUser;
export const fetchUser = () => (dispatch) => {
  dispatch({
    type: authActions.FETCH_USER_REQUEST,
  });
  Auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: authActions.FETCH_USER_SUCCESSFUL,
        user,
      });

      UsersRef.child(user.uid).on('value', (dataSnapshot) => {
        authenticatedUser = { ...dataSnapshot.val(), uid: user.uid };
        dispatch({
          type: authActions.FETCH_USER_SUCCESSFUL,
          user: authenticatedUser,
        });
        saveToken('Authorization', authenticatedUser);
      });
    } else {
      dispatch({
        type: authActions.FECTH_USER_FAILED,
        user: null,
      });
    }
  }, (error) => {
    dispatch({
      type: authActions.FECTH_USER_FAILED,
      user: error.message,
    });
  });
};

export const signin = obj => (dispatch) => {
  dispatch({ type: authActions.SIGNIN_REQUEST });

  Auth.signInWithEmailAndPassword(obj.email, obj.password).then((user) => {
    dispatch({
      type: authActions.SIGNIN_SUCCESSFUL,
      data: user,
    });
    dispatch({
      type: modal_actions.SHOW_NOTHING,
    });
  }).catch((err) => {
    dispatch({
      type: authActions.SIGNIN_FAILED,
      message: err.message,
    });
  });
};

export const forgetPassword = obj => (dispatch) => {
  dispatch({ type: authActions.FORGOT_PASSWORD_REQUEST });

  Auth.sendPasswordResetEmail(obj.email).then(() => {
    dispatch({
      type: authActions.FORGOT_PASSWORD_SUCCESSFUL,
    });
    dispatch({
      type: modal_actions.SHOW_NOTHING,
    });
  }).catch((err) => {
    dispatch({
      type: authActions.FORGOT_PASSWORD_FAILED,
      message: err.message,
    });
  });
};

export const signup = obj => async (dispatch) => {
  dispatch({ type: authActions.SIGNUP_REQUEST });
  const newObj = {};
  newObj.email = obj.email;
  newObj.number = obj.number;
  newObj.name = obj.name;
  let userAuth;
  let uid;
  try {
    userAuth = await Auth.createUserWithEmailAndPassword(obj.email, obj.password);
    ({ uid } = userAuth.user);
    dispatch({
      type: authActions.SIGNUP_SUCCESSFUL,
      data: userAuth,
    });

    dispatch({
      type: modal_actions.SHOW_NOTHING,
    });
    await UsersRef.child(uid).set(newObj);
  } catch (err) {
    dispatch({
      type: authActions.SIGNUP_FAILED,
      message: err.message,
    });
  }
};

export const signout = () => {
  Auth.signOut().then(() => (dispatch) => {
    dispatch({ type: authActions.SIGNOUT });
    dispatch({ type: modal_actions.SHOW_NOTHING });
    clearToken();
  });
};


export const resetPassword = () => {};
export const verifyEmail = () => {};
