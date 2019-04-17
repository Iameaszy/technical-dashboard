import React from "react";
import { connect } from "react-redux";
import SharedStyling from "./styles/shared";

import { withRouter,Link } from "react-router-dom";
import { validator } from "../../helpers/utils";

import auth_actions from "../../redux/actions/auth";

import Icon from "react-fa";
import { forgetPassword } from "../../redux/action-creators/auth";

import Logo from '../../assets/logo.jpg';


class ForgotPasswordPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: { value: "", valid: false }
      },
      toSubmit: {}
    };
  }
  onChange = e => {
    let { name, value, type } = e.target;
    this.setState(p => {
      return {
        toSubmit: { ...p.toSubmit, [name]: value },
        form: {
          ...p.form,
          [name]: {
            value,
            valid: validator(value, type)
          }
        }
      };
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const obj = { email: this.state.toSubmit.email.toLowerCase() };
    this.props.forgotPassword(obj);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.type === auth_actions.FORGOT_PASSWORD_SUCCESSFUL) {
      this.setState({
        successMessage:
          "Instructions to reset your password have been sent to you. Please check your email."
      });
    }
  }

  render() {
    let { type, message } = this.props;
    let { form, successMessage } = this.state,
      { email } = form,
      formKeys = Object.keys(form);

    let validCount = formKeys.filter(k => {
      return form[k].valid === true;
    }).length;

    let allFieldsAreValid = validCount === formKeys.length;

    return (
      <SharedStyling className="xs-12 i">
      <header className="header">
         <Link to="/" ><img src={Logo} alt="Logo" className="header-logo"/></Link>
      </header>
        <div className="c-w">
          <div className="c t-l">
            <div className="forgot-password">
              <h3 className="title text xs-10 sm-8 md-6 md-off-3 sm-off-2 xs-off-1 ">Forgot Password?</h3>

              <p className="text xs-10 sm-8 md-6 md-off-3 sm-off-2 xs-off-1">
                Enter your email address to reset your password
              </p>
            </div>
            <form
              className="xs-12 sm-6 sm-off-3"
              onSubmit={this.onSubmit}
              onClick={e => e.stopPropagation()}
            >
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  required
                  value={email.value}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                {type === auth_actions.FORGOT_PASSWORD_REQUEST ? (
                  <button
                    type="submit"
                    disabled={allFieldsAreValid === true ? false : true}
                  >
                    <Icon name="spinner" spin />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={allFieldsAreValid === true ? false : true}
                  >
                    Send Reset Instructions
                  </button>
                )}
                <Link className="login-link" to="/signin">Login with your account</Link>
              </div>

              <div className="form-group ">
                {type === auth_actions.FORGOT_PASSWORD_FAILED && (
                  <p id="error">{message}</p>
                )}
              </div>

              <div className="form-group ">
                {type === auth_actions.FORGOT_PASSWORD_SUCCESSFUL && (
                  <p id="success" style={{ color: "teal" }}>
                    {successMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </SharedStyling>
    );
  }
}

const mapStateToProps = state => {
  return {
    type: state.auth.type,
    message: state.auth.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    forgotPassword: obj => dispatch(forgetPassword(obj))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ForgotPasswordPage));
