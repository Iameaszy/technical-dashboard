import toggle_actions from '../actions/toggle';

const initState = {
  show: true,
  type: toggle_actions.TOGGLE,
  nav: false,
};

export default (state = initState, payload) => {
  switch (payload.type) {
    case toggle_actions.TOGGLE:
      return {
        show: payload.show,
        type: toggle_actions.TOGGLE || false,
        nav: payload.nav || false,
      };

    default:
      return state;
  }
};
