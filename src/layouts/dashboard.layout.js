import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  FaTh, FaShieldAlt, FaRegEnvelope, FaRegClone, FaUserFriends,
} from 'react-icons/fa';
import { TiHomeOutline } from 'react-icons/ti';
import { connect } from 'react-redux';
import NavbarPage from '../shared-components/navbar';
import Footer from '../shared-components/footer';
import { HomeStyle } from '../shared-components/dashboard/index.style';
import toggle_actions from '../redux/actions/toggle';

import ModalLayout from './modal.layout';
// import SearchBar from "../shared-components/search-bar";
export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  navigate(url) {
    this.props.history.push(url);
  }

  render() {
    const { component: Component, path, ...rest } = this.props;
    const { canSearch, type, status } = rest;
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
                  <span className="home-icon" onClick={this.onToggleClick}>
                    <TiHomeOutline size={20} />
                  </span>
                  {
                          type === toggle_actions.TOGGLE && status === true
                          && <span className="home-text" style={{ display: 'none' }}>Dashboard</span>
                        }
                  {
                          type === toggle_actions.TOGGLE && status === false
                          && <span className="home-text">Dashboard</span>
                        }

                </div>
                <div onClick={() => this.navigate('/facility')} className={path === '/facility' ? 'fa-facility menu active' : 'fa-facility menu'}>
                  <span className="home-icon">
                    <FaTh size={20} />
                  </span>
                  {
                          type === toggle_actions.TOGGLE && status === true
                          && <span className="home-text" style={{ display: 'none' }}>Facility Reports</span>
                        }
                  {
                          type === toggle_actions.TOGGLE && status === false
                          && <span className="home-text">Facility Reports</span>
                        }

                </div>
                <div onClick={() => this.navigate('/security')} className={path === '/security' ? 'fa-security menu active' : 'fa-security menu'}>
                  <span className="home-icon">
                    <FaShieldAlt size={20} />
                  </span>
                  {
                          type === toggle_actions.TOGGLE && status === true
                          && <span className="home-text" style={{ display: 'none' }}>Security Reports</span>
                        }
                  {
                          type === toggle_actions.TOGGLE && status === false
                          && <span className="home-text">Security Reports</span>
                        }
                </div>
                <div onClick={() => this.navigate('/communication')} className={path === '/communication' ? 'fa-communication menu active' : 'fa-home menu'}>
                  <span className="home-icon">
                    <FaRegEnvelope size={20} />
                  </span>
                  {
                          type === toggle_actions.TOGGLE && status === true
                          && <span className="home-text" style={{ display: 'none' }}>Communications</span>
                        }
                  {
                          type === toggle_actions.TOGGLE && status === false
                          && <span className="home-text">Communications</span>
                        }

                </div>
                <div onClick={() => this.navigate('/notice')} className={path === '/notice' ? 'fa-notice menu active' : 'fa-notice menu'}>
                  <span className="home-icon">
                    <FaRegClone size={20} />
                  </span>
                  {
                          type === toggle_actions.TOGGLE && status === true
                          && <span className="home-text" style={{ display: 'none' }}>Notice Board</span>
                        }
                  {
                          type === toggle_actions.TOGGLE && status === false
                          && <span className="home-text">Notice Board</span>
                        }

                </div>
                <div onClick={() => this.navigate('/students')} className={path === '/students' ? 'fa-students menu active' : 'fa-students menu'}>
                  <span className="home-icon">
                    <FaUserFriends size={20} />
                  </span>
                  {
                          type === toggle_actions.TOGGLE && status === true
                          && <span className="home-text" style={{ display: 'none' }}>Student Reports</span>
                        }
                  {
                          type === toggle_actions.TOGGLE && status === false
                          && <span className="home-text">Student Reports</span>
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
}


const mapStateToProps = state => ({
  type: state.toggle.type,
  status: state.toggle.show,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardLayout));
