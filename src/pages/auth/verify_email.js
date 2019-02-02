import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import auth_actions from '../../redux/actions/auth';
import { getQueryString } from '../../helpers/utils';
import { verify_email } from '../../redux/action-creators/auth';

class VerifyEmailPage extends React.PureComponent {
  componentDidMount() {
    let qs = getQueryString(window.location.href);
    this.props.verifyEmail(qs);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.type === auth_actions.VERIFY_EMAIL_SUCCESSFUL) {
      return this.props.history.push('/', {
        message: 'Email Verified Successfully',
        type: 'success',
      });
    }
    if (nextProps.type === auth_actions.VERIFY_EMAIL_FAILED) {
      return this.props.history.push('/', {
        message: nextProps.message,
        type: 'error',
      });
    }
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.auth.type,
    message: state.auth.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyEmail: (query) => dispatch(verify_email(query)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(VerifyEmailPage));
