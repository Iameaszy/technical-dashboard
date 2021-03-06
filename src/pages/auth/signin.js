import React from 'react';
import { connect } from 'react-redux';
import SharedStyling from './styles/shared';

import { Link, withRouter } from 'react-router-dom';
import { validator } from '../../helpers/utils';
import modal_actions from '../../redux/actions/modals';

import auth_actions from '../../redux/actions/auth';

import Icon from 'react-fa';
import { signin } from '../../redux/action-creators/auth';
import Logo from '../../assets/logo.jpg';

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

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (nextProps.type === auth_actions.SIGNIN_SUCCESSFUL) {
        nextProps.history.push("/");
      }
    }
  }
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
              className="xs-12 sm-4 sm-off-4"
              onSubmit={this.onSubmit}
              onClick={(e) => e.stopPropagation()}>
              <div className="l form-group">
                <img src={Logo} alt="Logo" className="logo" />
                <h2 className="notice" >Please Sign in to continue</h2>
              </div>
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
                    SIGN IN
                  </button>
                )}
              </div>

              <div className="form-group ">
                {type === auth_actions.SIGNIN_FAILED && (
                  <p id="error">{message}</p>
                )}
              </div>
              
              <div className="xs-16 sm-6">
              <div className="form-group-checkbox l">
              <label className="remember-label" htmlFor="remember">Keep me signed in </label>
              <input
                  className="form-control-checkbox"
                  name="remember"
                  id="remember"
                  type="checkbox"
                  placeholder="Password"
                  value={password.value}
                  onChange={this.onChange}
                />
              </div>
              </div>
              <div className="xs-16 sm-6">
                <Link
                  to="/forgot/password"
                  onClick={this.props.close_signup_modal}
                  className="little">
                  Lost your password ?
                </Link>
              </div>


              <div className="xs-12">
                <div className="xs-12">
                  <p className="little">
                    Don't have an account ?
                  </p>

                  <Link
                    to="/signup"
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
