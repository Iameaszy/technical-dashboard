import React from 'react';
import { connect } from 'react-redux';
import { SecurityStyle } from './security.style';
import * as reportMethods from '../../redux/action-creators/reports';
import reportActions from '../../redux/actions/reports';
import Card from '../../shared-components/card';
import Loader from '../../assets/flickr-loader.svg';
import toggleActions from '../../redux/actions/toggle';


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateReports = this.updateReports.bind(this);
    this.state = { reports: [], noMoreReports: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.windowEvent = null;
  }

  handleScroll(e) {
    if (window.pageYOffset >= (window.document.body.scrollHeight - window.innerHeight)) {
      this.updateReports();
    }
  }

  closeMobileNav() {
    const { closeMobileNavigation } = this.props;
    closeMobileNavigation();
  }

  componentDidMount() {
    this.updateReports();
    this.windowEvent = window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.type !== this.props.type && this.props.type === reportActions.GET_SECURITY_REPORTS_SUCCESSFUL) {
      this.closeMobileNav();
      const reports = Object.keys(this.props.reports).map((val, ind) => {
        const data = { ...this.props.reports[val] };
        data.id = val;
        return data;
      });
      this.setState({ reports }, () => {
        if (prevStates.reports.length === this.state.reports.length) {
          this.setState({ noMoreReports: true });
          window.removeEventListener('scroll', this.handleScroll);
        }
      });
    }
  }

  updateReports() {
    const { reports } = this.state;
    this.props.fetchSecurityReports(reports.length + 5);
  }

  render() {
    const { noMoreReports, reports } = this.state;
    const { type, toggle } = this.props;
    return (
      <React.Fragment>
        <SecurityStyle>
          <div className="header">
            <div className="title">Security Reports</div>
            <nav className="breadcrumb">
              <span className="breadcrumb-span">Home</span>
              <span>/&nbsp;</span>
              <span>Security</span>
            </nav>
          </div>
          <div className="home-content xs-12">
            {
           reports.map((val, ind) => (
             <div key={ind} className={`col xs-12 msm-6 md-4 ${toggle.show ? 'lg-3' : 'lg-4'}`}>
               <Card {...val} />
             </div>
           ))
        }
          </div>

        </SecurityStyle>
        {
          noMoreReports
          && <p>No more reports</p>
        }
        {
          type === reportActions.GET_SECURITY_REPORTS_REQUEST
          && <p><img src={Loader} alt="Loader" /></p>
        }
      </React.Fragment>
    );
  }
}

const mapStatesToProps = states => ({
  type: states.report.action,
  reports: states.report.reports,
  toggle: states.toggle,
});
const mapDispatchToProps = dispatch => ({
  fetchSecurityReports: (count) => {
    dispatch(reportMethods.fetchSecurityReports(count));
  },
  closeMobileNavigation: () => {
    dispatch({ type: toggleActions.TOGGLE, nav: false });
  },
});

export default connect(mapStatesToProps,
  mapDispatchToProps)(Home);
