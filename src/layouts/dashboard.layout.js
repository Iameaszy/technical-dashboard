import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  FaTh, FaShieldAlt, FaRegEnvelope, FaRegClone, FaUserFriends,
} from 'react-icons/fa';
import { TiHomeOutline } from 'react-icons/ti';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import NavbarPage from '../shared-components/navbar';
import Footer from '../shared-components/footer';
import { HomeStyle } from '../shared-components/dashboard/index.style';
import toggle_actions from '../redux/actions/toggle';
import ModalLayout from './modal.layout';
import { fetchUser } from '../redux/action-creators/auth';
import auth_actions from '../redux/actions/auth';
import Logo from '../assets/logo.jpg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin: auto;
    height: 100vh;

    img{
      width:200px;
      height:200px;
      display:block;
      border-radius:100%;
      animation: ${rotate} 2s linear infinite;
    }
`;
export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }


  componentWillMount() {
    this.props.fetchUser();
  }

  componentDidMount() {
    window.scroll(0, 0);
    // sendNotificationToUser('hello');
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated) {
      // this.props.history.push('/signin');
    }
  }

  navigate(url) {
    this.props.history.push(url);
  }

  render() {
    const { component: Component, path, ...rest } = this.props;
    const {
      canSearch, type, status, fetchUserType,
    } = rest;
    if (fetchUserType === auth_actions.FECTH_USER_FAILED) {
      this.props.history.push('/signin');
      return null;
    }

    if (fetchUserType === auth_actions.FETCH_USER_REQUEST) {
      return <Div><img src={Logo} alt="Website Loader" /></Div>;
    }

    if (fetchUserType === auth_actions.FETCH_USER_SUCCESSFUL) {
      return (
        <Route
          {...rest}
          render={matchProps => (
            <div className="DefaultLayout">
              <ModalLayout />
              <NavbarPage canSearch={canSearch} />
              <HomeStyle>
                <div className="side-bar">
                  <div onClick={() => this.navigate('/')} className={path === '/' ? 'fa-home menu active' : 'fa-home menu'}>
                    <span title="Dashboard" className="home-icon" onClick={this.onToggleClick}>
                      <TiHomeOutline size={20} />
                    </span>
                    {
                            type === toggle_actions.TOGGLE && status === false
                            && <span className="home-text" style={{ display: 'none' }}>Dashboard</span>
                          }
                    {
                            type === toggle_actions.TOGGLE && status === true
                            && <div className="home-text">Dashboard</div>
                          }

                  </div>
                  <div onClick={() => this.navigate('/facility')} className={path === '/facility' ? 'fa-facility menu active' : 'fa-facility menu'}>
                    <span className="home-icon" title="Facility">
                      <FaTh size={20} />
                    </span>
                    {
                            type === toggle_actions.TOGGLE && status === false
                            && <span className="home-text" style={{ display: 'none' }}>Facility Reports</span>
                          }
                    {
                            type === toggle_actions.TOGGLE && status === true
                            && <span className="home-text">Facility Reports</span>
                          }

                  </div>
                  <div onClick={() => this.navigate('/security')} className={path === '/security' ? 'fa-security menu active' : 'fa-security menu'}>
                    <span className="home-icon" title="Security">
                      <FaShieldAlt size={20} />
                    </span>
                    {
                            type === toggle_actions.TOGGLE && status === false
                            && <span className="home-text" style={{ display: 'none' }}>Security Reports</span>
                          }
                    {
                            type === toggle_actions.TOGGLE && status === true
                            && <span className="home-text">Security Reports</span>
                          }
                  </div>
                  <div onClick={() => this.navigate('/communication')} className={path === '/communication' ? 'fa-communication menu active' : 'fa-home menu'}>
                    <span className="home-icon" title="Communication">
                      <FaRegEnvelope size={20} />
                    </span>
                    {
                            type === toggle_actions.TOGGLE && status === false
                            && <span className="home-text" style={{ display: 'none' }}>Communications</span>
                          }
                    {
                            type === toggle_actions.TOGGLE && status === true
                            && <span className="home-text">Communications</span>
                          }

                  </div>
                  <div onClick={() => this.navigate('/notice')} className={path === '/notice' ? 'fa-notice menu active' : 'fa-notice menu'}>
                    <span className="home-icon" title="Notice">
                      <FaRegClone size={20} />
                    </span>
                    {
                            type === toggle_actions.TOGGLE && status === false
                            && <span className="home-text" style={{ display: 'none' }}>Notice Board</span>
                          }
                    {
                            type === toggle_actions.TOGGLE && status === true
                            && <span className="home-text">Notice Board</span>
                          }
                  </div>
                </div>
                <div className="content">
                  <Component {...matchProps} />
                </div>
              </HomeStyle>
              <Footer />
            </div>
          )}
        />
      );
    }

    return null;
  }
}


const mapStateToProps = state => ({
  type: state.toggle.type,
  status: state.toggle.show,
  isAuthenticated: state.auth.isAuthenticated,
  fetchUserType: state.auth.type,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => { dispatch(fetchUser()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardLayout));
