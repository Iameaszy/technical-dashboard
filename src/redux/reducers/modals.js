import modal_actions from '../actions/modals';

const initState = {
  show: false,
  type: modal_actions.SHOW_NOTHING,
};

export default (state = initState, payload) => {
  switch (payload.type) {
    case modal_actions.SHOW_SIGNIN:
      return {
        show: true,
        type: modal_actions.SHOW_SIGNIN,
      };

    case modal_actions.SHOW_SIGNUP:
      return {
        show: true,
        type: modal_actions.SHOW_SIGNUP,
      };

    case modal_actions.SHOW_EDIT:
      return {
        show: true,
        type: modal_actions.SHOW_EDIT,
        data: payload.data,
      };

    case modal_actions.SHOW_CONFIRM_DELETE:
      return {
        show: true,
        type: modal_actions.SHOW_CONFIRM_DELETE,
      };

    case modal_actions.SHOW_NOTHING:
      return {
        show: false,
        type: modal_actions.SHOW_NOTHING,
      };

    case modal_actions.SHOW_PLEASE_LOGIN:
      return {
        show: true,
        type: modal_actions.SHOW_PLEASE_LOGIN,
      };

    default:
      return state;
  }
};
