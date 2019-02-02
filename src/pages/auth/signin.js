import React from 'react';
import { connect } from 'react-redux';
import SharedStyling from './styles/shared';

import facebookIcon from './assets/icons/facebook.png';
import googleIcon from './assets/icons/google.png';

import { Link, withRouter } from 'react-router-dom';
import { validator } from '../../helpers/utils';
import modal_actions from '../../redux/actions/modals';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import auth_actions from '../../redux/actions/auth';

import Icon from 'react-fa';
import { signin, social_auth } from '../../redux/action-creators/auth';

import { GoogleLogin } from 'react-google-login';

const mapStateToProps = (state) => {
  return {
    type: state.auth.type,
    message: state.auth.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    show_signup_modal: () => dispatch({ type: modal_actions.SHOW_SIGNUP }),
    close_signup_modal: () => dispatch({ type: modal_actions.SHOW_NOTHING }),
    signin: (obj) => dispatch(signin(obj)),
    social_auth: (obj, type) => dispatch(social_auth(obj, type)),
  };
};
class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: { value: '', valid: false },
        password: { value: '', valid: false },
      },
      toSubmit: {},
    };
  }

  responseFacebook = (response) => {
    this.props.social_auth(response, 'facebook');
  };

  responseGoogle = (response) => {
    this.props.social_auth(response.profileObj, 'google');
  };

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

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state.toSubmit);
  };

  render() {
    let { type, message } = this.props;

    let { form } = this.state,
      { email, password } = form,
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
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password.value}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                {type === auth_actions.SIGNIN_REQUEST ? (
                  <button
                    type="submit"
                    disabled={allFieldsAreValid === true ? false : true}>
                    <Icon name="spinner" spin />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={allFieldsAreValid === true ? false : true}>
                    Sign in
                  </button>
                )}
              </div>

              <div className="form-group ">
                {type === auth_actions.SIGNIN_FAILED && (
                  <p id="error">{message}</p>
                )}
              </div>

              <div className="xs-12">
                <Link
                  to="/forgot/password"
                  onClick={this.props.close_signup_modal}
                  className="little">
                  Lost your password ?
                </Link>
              </div>

              <div className="xs-12 sm-btn-container">
                <div className="xs-12 sm-6">
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_APP_ID}
                    buttonText=""
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    className="sm-btn xs-12 sm-11"
                    type="button">
                    <span className="xs-9">
                      <div className="c-w">
                        <div className="c t-c">Sign in with Google</div>
                      </div>
                    </span>
                    <span className="xs-3">
                      <div className="c-w">
                        <div className="c t-c">
                          <img
                            className="sm-icon"
                            src={googleIcon}
                            alt="googleIcon"
                          />
                        </div>
                      </div>
                    </span>
                  </GoogleLogin>
                </div>
                <div className="xs-12 sm-6">
                  <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={false}
                    size="metro"
                    callback={this.responseFacebook}
                    fields="name,email,picture"
                    disableMobileRedirect={true}
                    render={(renderProps) => (
                      <button
                        className="sm-btn xs-12 sm-11"
                        type="button"
                        onClick={renderProps.onClick}>
                        <span className="xs-9">
                          <div className="c-w">
                            <div className="c t-c">Sign in with facebook</div>
                          </div>
                        </span>

                        <span className="xs-3">
                          <div className="c-w">
                            <div className="c t-c">
                              <img
                                className="sm-icon"
                                src={facebookIcon}
                                alt="facebookIcon"
                              />
                            </div>
                          </div>
                        </span>
                      </button>
                    )}
                  />
                </div>
              </div>

              <div className="xs-12">
                <div className="xs-12">
                  <p className="little">
                    Don't have an account ?
                  </p>

                  <Link
                    to="#"
                    className="big pad"
                    onClick={this.props.show_signup_modal}>
                    Create an account
                  </Link>
                </div>
                <p className="xs-10 xs-off-1 sm-6 sm-off-3 little">
                  By signing in you are agreeing to our Terms and Conditions of
                  Use and our Privacy Policy
                </p>
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
)(withRouter(SignInPage));
