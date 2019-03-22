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

export const fetchReports = count => async (dispatch) => {
  dispatch({
    type: reportActions.GET_REPORTS_REQUEST,
  });
  reportsRef.child('tkMCkiWomNV5O8vQcHELn2K9pKR2').limitToFirst(count || 20)
    .once('value')
    .then((snapshot) => {
      dispatch({
        type: reportActions.GET_REPORTS_SUCCESSFUL,
        reports: snapshot.val(),
      });
    })
    .catch((err) => {
      dispatch({
        type: reportActions.GET_REPORTS_FAILED,
        reports: err,
      });
    });
};

export const fetchReport = id => async (dispatch) => {
  dispatch({
    type: reportActions.GET_REPORT_REQUEST,
  });
  reportsRef.child('tkMCkiWomNV5O8vQcHELn2K9pKR2').child(id).once('value')
    .then((snapshot) => {
      dispatch({
        type: reportActions.GET_REPORT_SUCCESSFUL,
        report: snapshot.val(),
      });
    })
    .catch((err) => {
      dispatch({
        type: reportActions.GET_REPORT_FAILED,
        report: err,
      });
    });
};

export const fetchFacilityReports = count => async (dispatch) => {
  dispatch({
    type: reportActions.GET_FACILITY_REPORTS_REQUEST,
  });
  reportsRef.child('tkMCkiWomNV5O8vQcHELn2K9pKR2').orderByChild('report_type').equalTo('Facility Report').limitToFirst(count || 20)
    .once('value')
    .then((snapshot) => {
      dispatch({
        type: reportActions.GET_FACILITY_REPORTS_SUCCESSFUL,
        reports: snapshot.val(),
      });
    })
    .catch((err) => {
      dispatch({
        type: reportActions.GET_FACILITY_REPORTS_FAILED,
        reports: err,
      });
    });
};

export const fetchSecurityReports = count => async (dispatch) => {
  dispatch({
    type: reportActions.GET_SECURITY_REPORTS_REQUEST,
  });
  reportsRef.child('tkMCkiWomNV5O8vQcHELn2K9pKR2').orderByChild('report_type').equalTo('Security Report').limitToFirst(count || 20)
    .once('value')
    .then((snapshot) => {
      dispatch({
        type: reportActions.GET_SECURITY_REPORTS_SUCCESSFUL,
        reports: snapshot.val(),
      });
    })
    .catch((err) => {
      dispatch({
        type: reportActions.GET_SECURITY_REPORTS_FAILED,
        reports: err,
      });
    });
};
