import React from 'react';
import { connect } from 'react-redux';
import { TiHomeOutline } from 'react-icons/ti';
import {
  FaPowerOff, FaBars, FaEnvelope,
  FaTh, FaShieldAlt, FaRegEnvelope, FaRegClone, FaUserFriends,
} from 'react-icons/fa';
import { NavbarStyle, NavMobile } from './navbar.style';
import toggle_actions from '../../redux/actions/toggle';

export class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onMobileNavClick = this.onMobileNavClick.bind(this);
    this.state = { toggled: false };
  }

  onToggleClick() {
    const { type, status, toggled } = this.props;
    if (type === toggle_actions.TOGGLE) {
      toggled(!status);
    }
  }

  onMobileNavClick() {
    const { toggled } = this.state;
    this.setState({ toggled: !toggled });
  }


  render() {
    const { type, status } = this.props;
    const { toggled } = this.state;
    return (
      <NavbarStyle>
        {
          type === toggle_actions.TOGGLE && status === true
          && (
          <p className="left-block" style={{ marginLeft: '70px' }}>

            <span className="bars-icon" onClick={this.onToggleClick}><FaBars /></span>

            <span>Dashboard</span>
          </p>
          )
        }

        {
          type === toggle_actions.TOGGLE && status === false
          && (
          <p className="left-block" style={{ marginLeft: '260px' }}>

            <span className="bars-icon" onClick={this.onToggleClick}><FaBars /></span>

            <span>Dashboard</span>
          </p>
          )
        }

        <div className="right-block">
          <div className="message"><FaEnvelope /></div>
          <div className="logout">
            <span className="logout-text">Logout</span>
            <span className="power-off-icon"><FaPowerOff /></span>
          </div>
          <div className="mobile-toggle">
            <span className="toggle-icon" onClick={this.onMobileNavClick}><FaBars /></span>
          </div>
        </div>

        <NavMobile className="mobile-nav-bar" style={{ right: toggled ? '-300px' : '0' }}>
          <ul className="nav">
            <li className="nav-list message">
              <span className="icon">
                <FaEnvelope />
              </span>
              <span className="text">Message</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <TiHomeOutline />
              </span>
              <span className="text">Dashboard</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <FaTh />
              </span>
              <span className="text">Facility Reports</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <FaShieldAlt />
              </span>
              <span className="text">Security Reports</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <FaRegEnvelope />
              </span>
              <span className="text">Communications</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <FaRegClone />
              </span>
              <span className="text">Notice Board</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <FaUserFriends />
              </span>
              <span className="text">Students Reports</span>
            </li>
            <li className="nav-list">
              <span className="icon">
                <FaPowerOff />
              </span>
              <span className="text">Logout</span>
            </li>
          </ul>
        </NavMobile>
      </NavbarStyle>
    );
  }
}


const mapStateToProps = state => ({
  type: state.toggle.type,
  status: state.toggle.show,
});

const mapDispatchToProps = dispatch => ({
  toggled: (show) => {
    dispatch({ type: toggle_actions.TOGGLE, show });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
