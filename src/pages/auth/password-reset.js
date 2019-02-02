import React from 'react';
import { connect } from 'react-redux';
import SharedStyling from './styles/shared';

import { withRouter } from 'react-router-dom';
import { validator } from '../../helpers/utils';
import { reset_password } from '../../redux/action-creators/auth';
import auth_actions from '../../redux/actions/auth';

import { getQueryString } from '../../helpers/utils';

import Icon from 'react-fa';

const mapStateToProps = (state) => {
  return {
    type: state.auth.type,
    message: state.auth.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (obj, qs) => dispatch(reset_password(obj, qs)),
  };
};

class PasswordReset extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        password: { value: '', valid: false },
        verify_password: { value: '', valid: false },
      },
      toSubmit: {},
      qs: '',
    };
  }

  onChange = (e) => {
    let { name, value, type } = e.target;
    this.setState((p) => {
      return {
        toSubmit: { ...p.toSubmit, [name]: value },
        form: {
          ...p.form,
          [name]: {
            value,
            valid: validator(value, type),
          },
        },
      };
    });
  };

  handlePasswordVerification = (e) => {
    let { value, type } = e.target;

    this.setState((p) => {
      return {
        toSubmit: { ...p.toSubmit, verify_password: value },

        form: {
          ...p.form,
          verify_password: {
            value,
            valid: validator(value, type) && p.form.password.value === value,
          },
        },
      };
    });
  };

  componentDidMount() {
    let qs = getQueryString(window.location.href);
    if (qs) {
      this.setState({ qs });
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.resetPassword(this.state.toSubmit, this.state.qs);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.type === auth_actions.PASSWORD_RESET_SUCCESSFUL) {
      nextProps.history.push('/', {
        message: 'Password reset successful. Please signin',
      });
    }
  }

  render() {
    let { type, message } = this.props;

    let { form } = this.state,
      { password, verify_password } = form,
      formKeys = Object.keys(form);

    let validCount = formKeys.filter((k) => {
      return form[k].valid === true;
    }).length;

    let allFieldsAreValid = validCount === formKeys.length;

    return (
      <SharedStyling className="xs-12 i">
        <div className="c-w">
          <div className="c t-c">
            <form
              className="xs-12 sm-6 sm-off-3"
              onSubmit={this.onSubmit}
              onClick={(e) => e.stopPropagation()}>
              <div className="form-group">
                <input
                  className="split form-control"
                  name="password"
                  style={{ width: '25rem' }}
                  type="password"
                  placeholder="Password"
                  required
                  value={password.value}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="split form-control"
                  name="verify_password"
                  style={{ width: '25rem' }}
                  type="password"
                  placeholder="Verify password"
                  required
                  value={verify_password.value}
                  onChange={this.handlePasswordVerification}
                />
              </div>

              <div className="form-group xs-12">
                {type === auth_actions.PASSWORD_RESET_REQUEST ? (
                  <button
                    type="submit"
                    disabled={allFieldsAreValid === true ? false : true}>
                    <Icon name="spinner" spin />
                  </button>
                ) : (
                  <button
                    style={{
                      padding: '1rem 4.6rem',
                      marginLeft: '-0.6rem',
                    }}
                    type="submit"
                    disabled={allFieldsAreValid === true ? false : true}>
                    Reset Password
                  </button>
                )}
              </div>

              <div className="form-group xs-12">
                {type === auth_actions.PASSWORD_RESET_FAILED && (
                  <p id="error">{message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </SharedStyling>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PasswordReset));
