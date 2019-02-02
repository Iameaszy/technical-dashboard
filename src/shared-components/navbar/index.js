import React from 'react';
import { connect } from 'react-redux';
import { FaPowerOff, FaBars, FaEnvelope } from 'react-icons/fa';
import { NavbarStyle } from './navbar.style';
import toggle_actions from '../../redux/actions/toggle';

export class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onToggleClick() {
    const { type, status, toggled } = this.props;
    if (type === toggle_actions.TOGGLE) {
      toggled(!status);
    }
  }


  render() {
    const { type, status } = this.props;
    return (
      <NavbarStyle>
        {
          type === toggle_actions.TOGGLE && status === true &&
          <p className="left-block" style={{ marginLeft: '60px' }}>

          <span className="bars-icon" onClick={this.onToggleClick}><FaBars /></span>

          <span>Dashboard</span>
        </p>
        }

        {
          type === toggle_actions.TOGGLE && status === false &&
          <p className="left-block" style={{ marginLeft: '260px' }}>

          <span className="bars-icon" onClick={this.onToggleClick}><FaBars /></span>

          <span>Dashboard</span>
        </p>
        }
        
        <div className="right-block">
          <div className="message"><FaEnvelope /></div>
          <div className="Logout">
            <span className="logout-text">Logout</span>
            <span className="power-off-icon"><FaPowerOff /></span>
          </div>
        </div>
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
