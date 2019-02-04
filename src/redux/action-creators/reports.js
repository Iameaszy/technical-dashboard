import { reportsRef } from '../../config/firebase';
import reportActions from '../actions/reports';

export const addToReports = newReport => async (dispatch) => {
  dispatch({
    type: reportActions.ADD_REPORT_REQUEST,
  });
  reportsRef.push().set(newReport, (error) => {
    if (error) {
      dispatch({
        type: reportActions.ADD_REPORT_FAILED,
        reports: error,
      });
    } else {
      dispatch({
        type: reportActions.ADD_REPORT_SUCCESSFUL,
        reports: {},
      });
    }
  });
};


export const updateReport = reportId => async (dispatch) => {
  dispatch({
    type: reportActions.UPDATE_REPORT_REQUEST,
  });
  reportsRef.child(reportId).update().then(() => {
    dispatch({
      type: reportActions.UPDATE_REPORT_SUCCESSFUL,
      reports: {},
    });
  })
    .catch((err) => {
      dispatch({
        type: reportActions.UPDATE_REPORT_FAILED,
        reports: err,
      });
    });
};

export const removeReport = reportId => async (dispatch) => {
  dispatch({
    type: reportActions.DELETE_REPORT_REQUEST,
  });
  reportsRef.child(reportId).remove().then(() => {
    dispatch({
      type: reportActions.DELETE_REPORT_SUCCESSFUL,
      reports: {},
    });
  })
    .catch((err) => {
      dispatch({
        type: reportActions.DELETE_REPORT_FAILED,
        reports: err,
      });
    });
};

export const fetchReports = () => async (dispatch) => {
  dispatch({
    type: reportActions.GET_REPORTS_REQUEST,
  });
  reportsRef.once('value').then((snapshot) => {
    dispatch({
      type: reportActions.GET_REPORTS_SUCCESSFUL,
      reports: snapshot.child('tkMCkiWomNV5O8vQcHELn2K9pKR2').val(),
    });
  })
    .catch((err) => {
      dispatch({
        type: reportActions.GET_REPORTS_SUCCESSFUL,
        reports: err,
      });
    });
};
