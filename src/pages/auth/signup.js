import React from "react";
import { connect } from "react-redux";
import SharedStyling from "./styles/shared";

import { Link, withRouter } from "react-router-dom";
import { validator } from "../../helpers/utils";
import modal_actions from "../../redux/actions/modals";
import { signup} from "../../redux/action-creators/auth";
import auth_actions from "../../redux/actions/auth";
import Logo from '../../assets/logo.jpg';

import Icon from "react-fa";

const mapStateToProps = state => {
  return {
    type: state.auth.type,
    message: state.auth.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close_signup_modal:()=>dispatch({type:modal_actions.SHOW_NOTHING}),
    show_signin_modal: () => dispatch({ type: modal_actions.SHOW_SIGNIN }),
    signup: obj => dispatch(signup(obj)),
  };
};

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: { value: "", valid: false },
        password: { value: "", valid: false },
        name: { value: "", valid: false },
        number: { value: "", valid: false },
        verify_password: { value: "", valid: false }
      },
      toSubmit: {}
    };
  }
  responseFacebook = response => {
    this.props.social_auth(response, "facebook");
  };

  responseGoogle = response => {
    this.props.social_auth(response.profileObj, "google");
  };
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

  handlePasswordVerification = e => {
    let { value, type } = e.target;

    this.setState(p => {
      return {
        toSubmit: { ...p.toSubmit, verify_password: value },

        form: {
          ...p.form,
          verify_password: {
            value,
            valid: validator(value, type) && p.form.password.value === value
          }
        }
      };
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state.toSubmit);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (nextProps.type === auth_actions.SIGNUP_SUCCESSFUL) {
        nextProps.history.push("/");
      }
    }
  }

  render() {
    let { type, message } = this.props;

    let { form } = this.state,
      { email, password, name, number, verify_password } = form,
      formKeys = Object.keys(form);

    let validCount = formKeys.filter(k => {
      return form[k].valid === true;
    }).length;

    let allFieldsAreValid = validCount === formKeys.length;

    return <SharedStyling className="xs-12 i">
        <div className="c-w">
          <div className="c t-c">
            <form className="xs-12 sm-5 sm-off-4" onSubmit={this.onSubmit} onClick={(e) => e.stopPropagation()}>
            <div className="form-group">
                <h3 className="signup-title">Sign Up</h3>
                <small className="signup-text">Please fill in this form to create an account</small>
            </div>
              <div className="form-group">
                <input name="name" className={`form-control ${name.valid ? '' : 'not-valid'} `} type="text" placeholder="Full name" required value={name.value} onChange={this.onChange} />
              </div>
              <div className="form-group">
                <input name="email" className={`form-control  ${email.valid ? '' : 'not-valid'}`} type="email" placeholder="Email" required value={email.value} onChange={this.onChange} />
              </div>

              <div className="form-group">
                <input name="number" className={`form-control  ${number.valid ? '' : 'not-valid'}`} type="tel" placeholder="Phone number" required value={number.value} onChange={this.onChange} />
              </div>

              <div className="form-group xs-12">
                <input className="split form-control" name="password" type="password" placeholder="Password" required value={password.value} onChange={this.onChange} />

                <input className="split form-control" name="verify_password" type="password" placeholder="Verify password" required value={verify_password.value} onChange={this.handlePasswordVerification} />
              </div>

              <div className="form-group xs-12">
                {type === auth_actions.SIGNUP_REQUEST ? <button type="submit" disabled={allFieldsAreValid === true ? false : true}>
                    <Icon name="spinner" spin />
                  </button> : <button type="submit" disabled={allFieldsAreValid === true ? false : true}>
                    Create account
                  </button>}
              </div>

              <div className="form-group xs-12">
                {type === auth_actions.SIGNUP_FAILED && (
                  <p id="error">{message}</p>
                )}
              </div>

              <div className="xs-12">
                <div className="xs-12">
                  <Link to="/forgot/password" onClick={this.props.close_signup_modal} className="little">
                    Already have an account ?
                  </Link>

                  <Link to="/signin" className="big pad" onClick={this.props.show_signin_modal}>
                    Sign in
                  </Link>
                </div>
                <p className="xs-10 xs-off-1 sm-6 sm-off-3 little">
                  By signing in you are agreeing to our Terms and Conditions
                  of Use and our Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </SharedStyling>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignInPage));
