import React from 'react';
import { Route } from 'react-router-dom';
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
export class DefaultLayout extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { component: Component, ...rest } = this.props;
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
                <div className="fa-home menu">
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
                <div className="fa-facility menu">
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
                <div className="fa-security menu">
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
                <div className="fa-communication menu">
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
                <div className="fa-notice menu">
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
                <div className="fa-students menu">
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
