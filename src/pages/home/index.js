import React from 'react';
import { connect } from 'react-redux';
import { HomeStyle, DeleteLoader } from './home.style';
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

  closeMobileNav() {
    const { closeMobileNavigation } = this.props;
    closeMobileNavigation();
  }

  handleScroll(e) {
    if (window.pageYOffset >= (window.document.body.scrollHeight - window.innerHeight)) {
      this.updateReports();
    }
  }

  componentDidMount() {
    this.closeMobileNav();
    this.updateReports();
    this.windowEvent = window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.type !== this.props.type && this.props.type === reportActions.GET_REPORTS_SUCCESSFUL) {
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
    if (prevProps.action !== this.props.action && this.props.action === reportActions.DELETE_REPORT_SUCCESSFUL) {
      window.location.reload();
    }
  }

  updateReports() {
    const { reports } = this.state;
    this.props.fetchReports(reports.length + 20);
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

  render() {
    const {
      type, action, toggle, deleteReport,
    } = this.props;
    const { reports, noMoreReports } = this.state;
    return (
      <React.Fragment>
        {reportActions.DELETE_REPORT_REQUEST === action

        && <DeleteLoader className="delete-loader">Deleting...</DeleteLoader>}
        <HomeStyle>
          <div className="header">
            <div className="title">Reports</div>
            <nav className="breadcrumb">
              <span className="breadcrumb-span">Home</span>
            </nav>
          </div>
          <div className="home-content xs-12">
            {
           reports.map((val, ind) => (
             <div key={ind} className={`col xs-12 msm-6 md-4 ${toggle.show ? 'lg-3' : 'lg-4'}`}>
               <Card {...val} toggleControls={this.toggleControls} deleteReport={deleteReport} />
             </div>
           ))
        }
          </div>

        </HomeStyle>
        {
          type === reportActions.GET_REPORTS_REQUEST
          && <p><img src={Loader} alt="Loader" /></p>
        }
        {
          noMoreReports
          && <p>No more reports</p>
        }
      </React.Fragment>
    );
  }
}

const mapStatesToProps = states => ({
  type: states.report.action,
  action: states.report.type,
  reports: states.report.reports,
  toggle: states.toggle,
});
const mapDispatchToProps = dispatch => ({
  fetchReports: (count) => {
    dispatch(reportMethods.fetchReports(count));
  },
  closeMobileNavigation: () => {
    dispatch({ type: toggleActions.TOGGLE, nav: false });
  },
  deleteReport: (id) => {
    dispatch(reportMethods.deleteReport(id));
  },
});

export default connect(mapStatesToProps,
  mapDispatchToProps)(Home);
