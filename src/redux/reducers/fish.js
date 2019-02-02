import fishActions from '../actions/fish';

const init = {
  action: '',
  message: '',
  fishes: [],
};
export default (state = init, payload) => {
  switch (payload.type) {
    case fishActions.GET_FISHES_REQUEST:
      return {
        ...state,
        action: fishActions.GET_FISHES_REQUEST,
      };

    case fishActions.GET_FISHES_FAILED:
      return {
        ...state,
        action: fishActions.GET_FISHES_FAILED,
        message: payload.message,
      };
    case fishActions.GET_FISHES_SUCCESSFUL:
      return {
        ...state,
        action: fishActions.GET_FISHES_SUCCESSFUL,
        fishes: payload.fishes,
      };

    default:
      return state;
  }
};
