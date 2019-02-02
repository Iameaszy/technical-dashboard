import auth_actions from '../actions/auth';

const initState = {
  type: '',
  message: '',
  data: {
    isAdmin: false,
    name: '',
    picture: 'https://placehold.it/200',
    userID: '',
    email: '',
  },
  isAuthenticated: false,
};

export default (state = initState, payload) => {
  switch (payload.type) {
    case auth_actions.SIGNIN_REQUEST:
      return {
        ...state,
        type: auth_actions.SIGNIN_REQUEST,
      };

    case auth_actions.SIGNIN_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.SIGNIN_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
        isAuthenticated: true,
      };

    case auth_actions.SIGNIN_FAILED:
      return {
        ...state,
        type: auth_actions.SIGNIN_FAILED,
        message: payload.message,
      };

    case auth_actions.UPDATE_REQUEST:
      return {
        ...state,
        type: auth_actions.UPDATE_REQUEST,
      };

    case auth_actions.UPDATE_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.UPDATE_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
      };

    case auth_actions.UPDATE_FAILED:
      return {
        ...state,
        type: auth_actions.UPDATE_FAILED,
        message: payload.message,
      };

    case auth_actions.SIGNUP_REQUEST:
      return {
        ...state,
        type: auth_actions.SIGNUP_REQUEST,
      };

    case auth_actions.SIGNUP_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.SIGNUP_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
        isAuthenticated: true,
      };

    case auth_actions.SIGNUP_FAILED:
      return {
        ...state,
        type: auth_actions.SIGNUP_FAILED,
        message: payload.message,
      };

    case auth_actions.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        type: auth_actions.FORGOT_PASSWORD_REQUEST,
      };

    case auth_actions.FORGOT_PASSWORD_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.FORGOT_PASSWORD_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
      };

    case auth_actions.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        type: auth_actions.FORGOT_PASSWORD_FAILED,
        message: payload.message,
      };

    case auth_actions.PASSWORD_RESET_REQUEST:
      return {
        ...state,
        type: auth_actions.PASSWORD_RESET_REQUEST,
      };

    case auth_actions.PASSWORD_RESET_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.PASSWORD_RESET_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
      };

    case auth_actions.PASSWORD_RESET_FAILED:
      return {
        ...state,
        type: auth_actions.PASSWORD_RESET_FAILED,
        message: payload.message,
      };

    case auth_actions.VERIFY_TOKEN_REQUEST:
      return {
        ...state,
        type: auth_actions.VERIFY_TOKEN_REQUEST,
      };

    case auth_actions.VERIFY_TOKEN_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.VERIFY_TOKEN_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
        isAuthenticated: true,
      };

    case auth_actions.VERIFY_TOKEN_FAILED:
      return {
        ...state,
        type: auth_actions.VERIFY_TOKEN_FAILED,
        message: payload.message,
      };

    case auth_actions.GET_EMAIL_LINK_REQUEST:
      return {
        ...state,
        type: auth_actions.GET_EMAIL_LINK_REQUEST,
      };

    case auth_actions.GET_EMAIL_LINK_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.GET_EMAIL_LINK_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
        isAuthenticated: true,
      };

    case auth_actions.GET_EMAIL_LINK_FAILED:
      return {
        ...state,
        type: auth_actions.GET_EMAIL_LINK_FAILED,
        message: payload.message,
      };

    case auth_actions.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        type: auth_actions.VERIFY_EMAIL_REQUEST,
      };

    case auth_actions.VERIFY_EMAIL_SUCCESSFUL:
      return {
        ...state,
        type: auth_actions.VERIFY_EMAIL_SUCCESSFUL,
        message: payload.message,
        data: { ...state.data, ...payload.data },
        isAuthenticated: true,
      };

    case auth_actions.VERIFY_EMAIL_FAILED:
      return {
        ...state,
        type: auth_actions.VERIFY_EMAIL_FAILED,
        message: payload.message,
      };

    case auth_actions.SIGNOUT:
      return {
        ...initState,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
