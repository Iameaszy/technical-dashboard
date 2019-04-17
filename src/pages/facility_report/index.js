import React from 'react';
import { connect } from 'react-redux';
import { FacilityStyle } from './facility.style';
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
    this.toggleControls = this.toggleControls.bind(this);
    this.windowEvent = null;
  }


  toggleControls(id) {
    const reports = this.state.reports.map((val) => {
      if (val.id === id) {
        if (val.control) {
          val.control = false;
        } else {
          val.control = true;
        }
      }
      return val;
    });
    this.setState({ reports });
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
    this.closeMobileNav();
    this.updateReports();
    this.windowEvent = window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.type !== this.props.type && this.props.type === reportActions.GET_FACILITY_REPORTS_SUCCESSFUL) {
      const reports = Object.keys(this.props.reports).map((val, ind) => {
        const data = { ...this.props.reports[val] };
        data.id = val;
        data.control = false;
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
    this.props.fetchFacilityReports(reports.length + 20);
  }

  render() {
    const { noMoreReports, reports } = this.state;
    const {
      type, toggle, deleteReport, markReportAsSeen,
    } = this.props;
    return (
      <React.Fragment>
        <FacilityStyle>
          <div className="header">
            <div className="title">Facility Reports</div>
            <nav className="breadcrumb">
              <span className="breadcrumb-span">Home</span>
              <span>/&nbsp;</span>
              <span className="facility-crumb">Facility</span>
            </nav>
          </div>
          <div className="home-content xs-12">
            {
           reports.map((val, ind) => (
             <div key={ind} className={`col xs-12 msm-6 md-4 ${toggle.show ? 'lg-3' : 'lg-4'}`}>
               <Card {...val} report={val} markAsSeen={markReportAsSeen} toggleControls={this.toggleControls} deleteReport={deleteReport} />
             </div>
           ))
        }
          </div>
        </FacilityStyle>
        {
          noMoreReports
          && <p>No more reports</p>
        }
        {
          type === reportActions.GET_FACILITY_REPORTS_REQUEST
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
  fetchFacilityReports: (count) => {
    dispatch(reportMethods.fetchFacilityReports(count));
  },
  closeMobileNavigation: () => {
    dispatch({ type: toggleActions.TOGGLE, nav: false });
  },
  deleteReport: (id) => {
    dispatch(reportMethods.deleteReport(id));
  },
  markReportAsSeen: report => dispatch(reportMethods.markAsSeen(report)),
});

export default connect(mapStatesToProps,
  mapDispatchToProps)(Home);
