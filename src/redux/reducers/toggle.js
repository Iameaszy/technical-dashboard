import toggle_actions from '../actions/toggle';

const initState = {
  show: false,
  type: toggle_actions.TOGGLE,
};

export default (state = initState, payload) => {
  switch (payload.type) {
    case toggle_actions.TOGGLE:
      return {
        show: payload.show,
        type: toggle_actions.TOGGLE,
      };

    default:
      return state;
  }
};
