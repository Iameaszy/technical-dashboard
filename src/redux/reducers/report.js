import reportActions from '../actions/reports';

const init = {
  action: '',
  report: {},
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

      // Report
    case reportActions.GET_REPORT_REQUEST:
      return {
        ...state,
        type: reportActions.GET_REPORT_REQUEST,
      };

    case reportActions.GET_REPORT_FAILED:
      return {
        ...state,
        type: reportActions.GET_REPORT_FAILED,
        report: payload.report,
      };
    case reportActions.GET_REPORT_SUCCESSFUL:
      return {
        ...state,
        type: reportActions.GET_REPORT_SUCCESSFUL,
        report: payload.report,
      };

    case reportActions.DELETE_REPORT_REQUEST:
      return {
        ...state,
        type: reportActions.DELETE_REPORT_REQUEST,
      };

    case reportActions.DELETE_REPORT_FAILED:
      return {
        ...state,
        type: reportActions.DELETE_REPORT_FAILED,
        report: payload.report,
      };
    case reportActions.DELETE_REPORT_SUCCESSFUL:
      return {
        ...state,
        type: reportActions.DELETE_REPORT_SUCCESSFUL,
      };

    case reportActions.GET_FACILITY_REPORTS_REQUEST:
      return {
        ...state,
        action: reportActions.GET_FACILITY_REPORTS_REQUEST,
      };

    case reportActions.GET_FACILITY_REPORTS_FAILED:
      return {
        ...state,
        action: reportActions.GET_FACILITY_REPORTS_FAILED,
        reports: payload.reports,
      };
    case reportActions.GET_FACILITY_REPORTS_SUCCESSFUL:
      return {
        ...state,
        action: reportActions.GET_FACILITY_REPORTS_SUCCESSFUL,
        reports: payload.reports,
      };


    case reportActions.GET_SECURITY_REPORTS_REQUEST:
      return {
        ...state,
        action: reportActions.GET_SECURITY_REPORTS_REQUEST,
      };

    case reportActions.GET_SECURITY_REPORTS_FAILED:
      return {
        ...state,
        action: reportActions.GET_SECURITY_REPORTS_FAILED,
        reports: payload.reports,
      };
    case reportActions.GET_SECURITY_REPORTS_SUCCESSFUL:
      return {
        ...state,
        action: reportActions.GET_SECURITY_REPORTS_SUCCESSFUL,
        reports: payload.reports,
      };

    case reportActions.MARK_AS_SEEN_REQUEST:
      return {
        ...state,
        action: reportActions.MARK_AS_SEEN_REQUEST,
      };

    case reportActions.MARK_AS_SEEN_FAILED:
      return {
        ...state,
        action: reportActions.MARK_AS_SEEN_FAILED,
        message: payload.message,
      };
    case reportActions.MARK_AS_SEEN_SUCCESSFUL:
      return {
        ...state,
        action: reportActions.MARK_AS_SEEN_SUCCESSFUL,
      };

    default:
      return state;
  }
};
