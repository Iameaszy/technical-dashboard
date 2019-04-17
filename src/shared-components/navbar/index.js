import React from 'react';
import { connect } from 'react-redux';
import { TiHomeOutline } from 'react-icons/ti';
import {
  FaPowerOff, FaBars, FaEnvelope,
  FaTh, FaShieldAlt, FaRegEnvelope, FaRegClone,
} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import { NavbarStyle, NavMobile } from './navbar.style';
import toggleActions from '../../redux/actions/toggle';
import { signout } from '../../redux/action-creators/auth';
import Logo from '../../assets/logo.jpg';

export class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onMobileNavClick = this.onMobileNavClick.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  onToggleClick() {
    const { type, show, toggled } = this.props;
    if (type === toggleActions.TOGGLE) {
      toggled(!show);
    }
  }

  onMobileNavClick() {
    const { type, nav, navToggle } = this.props;
    if (type === toggleActions.TOGGLE) {
      navToggle(!nav);
    }
  }

  navigate(url) {
    this.props.history.push(url);
  }

  render() {
    const {
      type, show, nav, logout,
    } = this.props;

    return (
      <NavbarStyle>
        {
          type === toggleActions.TOGGLE && show === true
            ? (
              <p className="left-block" style={{ marginLeft: '260px' }}>

                <span className="bars-icon" onClick={this.onToggleClick}><FaBars size={28} /></span>

                <div><a href="/" title="Reporter"><img className="logo" src={Logo} alt="Logo" /></a></div>
              </p>
            )
            : (
              <p className="left-block" style={{ marginLeft: '70px' }}>

                <span className="bars-icon" onClick={this.onToggleClick}><FaBars size={28} /></span>

                <div><a href="/" title="Reporter"><img className="logo" src={Logo} alt="Logo" /></a></div>
              </p>
            )
        }

        <div className="right-block">
          <div className="message">{/* <FaEnvelope /> */}</div>
          <div className="logout">
            <span
              onClick={() => {
                logout();
              }}
              className="logout-text"
            >
            Logout
            </span>
            <span
              className="power-off-icon"
              title="logout"
              onClick={() => {
                logout();
              }}
            >
              <FaPowerOff />

            </span>
          </div>
          <div className="mobile-toggle">
            <span className="toggle-icon" onClick={this.onMobileNavClick}><FaBars size={21} /></span>
          </div>

        </div>

        <NavMobile className="mobile-nav-bar" style={{ right: type === toggleActions.TOGGLE && !nav ? '-300px' : '0' }}>
          <ul className="nav">
            <li onClick={() => this.navigate('/message')} className="nav-list message">
              <span className="icon">
                <FaEnvelope />
              </span>
              <span className="text">Message</span>
            </li>
            <li className="nav-list" onClick={() => this.navigate('/')}>
              <span className="icon">
                <TiHomeOutline />
              </span>
              <span className="text">Dashboard</span>
            </li>
            <li className="nav-list" onClick={() => this.navigate('/facility')}>
              <span className="icon">
                <FaTh />
              </span>
              <span className="text">Facility Reports</span>
            </li>
            <li className="nav-list" onClick={() => this.navigate('/security')}>
              <span className="icon">
                <FaShieldAlt />
              </span>
              <span className="text">Security Reports</span>
            </li>
            <li className="nav-list" onClick={() => this.navigate('/communication')}>
              <span className="icon">
                <FaRegEnvelope />
              </span>
              <span className="text">Communications</span>
            </li>
            <li className="nav-list" onClick={() => this.navigate('/notice')}>
              <span className="icon">
                <FaRegClone />
              </span>
              <span className="text">Notice Board</span>
            </li>
            <li className="nav-list" onClick={() => logout()}>
              <span className="icon">
                <FaPowerOff />
              </span>
              <span
                onClick={() => {
                  logout();
                }}
                className="text"
              >
                  Logout
              </span>
            </li>
          </ul>
        </NavMobile>
      </NavbarStyle>
    );
  }
}


const mapStateToProps = state => ({
  type: state.toggle.type,
  show: state.toggle.show,
  nav: state.toggle.nav,
});

const mapDispatchToProps = dispatch => ({
  toggled: (show) => {
    dispatch({ type: toggleActions.TOGGLE, show });
  },
  navToggle: (nav) => {
    dispatch({ type: toggleActions.TOGGLE, nav });
  },
  logout: () => {
    signout();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
