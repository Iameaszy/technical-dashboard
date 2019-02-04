import reportActions from '../actions/reports';

const init = {
  action: '',
  reports: {},
};
export default (state = init, payload) => {
  switch (payload.type) {
    case reportActions.GET_REPORTS_REQUEST:
      return {
        ...state,
        action: reportActions.GET_REPORTS_REQUEST,
      };

    case reportActions.GET_REPORTS_FAILED:
      return {
        ...state,
        action: reportActions.GET_REPORTS_FAILED,
        reports: payload.reports,
      };
    case reportActions.GET_REPORTS_SUCCESSFUL:
      return {
        ...state,
        action: reportActions.GET_REPORTS_SUCCESSFUL,
        reports: payload.reports,
      };

    default:
      return state;
  }
};
