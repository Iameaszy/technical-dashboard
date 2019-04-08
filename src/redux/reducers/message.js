import messageActions from '../actions/message';

const init = {
  type: '',
  messages: {},
};
export default (state = init, payload) => {
  switch (payload.type) {
    case messageActions.GET_MESSAGES_REQUEST:
      return {
        ...state,
        type: messageActions.GET_MESSAGES_REQUEST,
      };

    case messageActions.GET_MESSAGES_FAILED:
      return {
        ...state,
        type: messageActions.GET_MESSAGES_FAILED,
        messages: payload.messages,
      };
    case messageActions.GET_MESSAGES_SUCCESSFUL:
      return {
        ...state,
        type: messageActions.GET_MESSAGES_SUCCESSFUL,
        messages: payload.messages || {},
      };

    case messageActions.GET_MESSAGE_REQUEST:
      return {
        ...state,
        type: messageActions.GET_MESSAGE_REQUEST,
      };

    case messageActions.GET_MESSAGE_FAILED:
      return {
        ...state,
        type: messageActions.GET_MESSAGE_FAILED,
        message: payload.message,
      };
    case messageActions.GET_MESSAGE_SUCCESSFUL:
      return {
        ...state,
        type: messageActions.GET_MESSAGE_SUCCESSFUL,
        message: payload.message,
      };


    case messageActions.SEND_MESSAGE_REQUEST:
      return {
        ...state,
        type: messageActions.SEND_MESSAGE_REQUEST,
      };

    case messageActions.SEND_MESSAGE_FAILED:
      return {
        ...state,
        type: messageActions.SEND_MESSAGE_FAILED,
        message: payload.message,
      };
    case messageActions.SEND_MESSAGE_SUCCESSFUL:
      return {
        ...state,
        type: messageActions.SEND_MESSAGE_SUCCESSFUL,
        message: payload.message,
      };

    case messageActions.STAR_MESSAGE_REQUEST:
      return {
        ...state,
        type: messageActions.STAR_MESSAGE_REQUEST,
      };

    case messageActions.STAR_MESSAGE_FAILED:
      return {
        ...state,
        type: messageActions.STAR_MESSAGE_FAILED,
        message: payload.message,
      };
    case messageActions.STAR_MESSAGE_SUCCESSFUL:
      return {
        ...state,
        type: messageActions.STAR_MESSAGE_SUCCESSFUL,
      };

    case messageActions.SAVE_MESSAGE_REQUEST:
      return {
        ...state,
        type: messageActions.SAVE_MESSAGE_REQUEST,
      };

    case messageActions.SAVE_MESSAGE_FAILED:
      return {
        ...state,
        type: messageActions.SAVE_MESSAGE_FAILED,
        message: payload.message,
      };
    case messageActions.SAVE_MESSAGE_SUCCESSFUL:
      return {
        ...state,
        type: messageActions.SAVE_MESSAGE_SUCCESSFUL,
      };

      // Delete
    case messageActions.DELETE_MESSAGE_REQUEST:
      return {
        ...state,
        type: messageActions.DELETE_MESSAGE_REQUEST,
      };

    case messageActions.DELETE_MESSAGE_FAILED:
      return {
        ...state,
        type: messageActions.DELETE_MESSAGE_FAILED,
        messages: payload.message,
      };
    case messageActions.DELETE_MESSAGE_SUCCESSFUL:
      return {
        ...state,
        type: messageActions.DELETE_MESSAGE_SUCCESSFUL,
        messages: payload.message,
      };


    case messageActions.MARK_AS_READ_REQUEST:
      return {
        ...state,
        action: messageActions.MARK_AS_READ_REQUEST,
      };

    case messageActions.MARK_AS_READ_FAILED:
      return {
        ...state,
        action: messageActions.MARK_AS_READ_FAILED,
        message: payload.message,
      };
    case messageActions.MARK_AS_READ_SUCCESSFUL:
      return {
        ...state,
        action: messageActions.MARK_AS_READ_SUCCESSFUL,
      };


    default:
      return state;
  }
};
