import noticeActions from '../actions/notice';

const init = {
  type: '',
  message: '',
};
export default (state = init, payload) => {
  switch (payload.type) {
    case noticeActions.UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        type: noticeActions.UPLOAD_IMAGE_REQUEST,
      };

    case noticeActions.UPLOAD_IMAGE_FAILED:
      return {
        ...state,
        type: noticeActions.UPLOAD_IMAGE_FAILED,
        message: payload.message,
      };
    case noticeActions.UPLOAD_IMAGE_SUCCESSFUL:
      return {
        ...state,
        type: noticeActions.UPLOAD_IMAGE_SUCCESSFUL,
        message: payload.message,
      };


      // Upload Text
    case noticeActions.UPLOAD_TEXT_REQUEST:
      return {
        ...state,
        type: noticeActions.UPLOAD_TEXT_REQUEST,
      };

    case noticeActions.UPLOAD_TEXT_FAILED:
      return {
        ...state,
        type: noticeActions.UPLOAD_TEXT_FAILED,
        message: payload.message,
      };
    case noticeActions.UPLOAD_TEXT_SUCCESSFUL:
      return {
        ...state,
        type: noticeActions.UPLOAD_TEXT_SUCCESSFUL,
        message: payload.message,
      };
    default:
      return state;
  }
};
