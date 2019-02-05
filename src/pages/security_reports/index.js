import React from 'react';
import { connect } from 'react-redux';
import { SecurityStyle } from './security.style';
import * as reportMethods from '../../redux/action-creators/reports';
import reportActions from '../../redux/actions/reports';
import Card from '../../shared-components/card';

export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchSecurityReports();
  }

  render() {
    const { type, reports } = this.props;
    return (
      <SecurityStyle>
        <div className="header">
          <div className="title">Security Reports</div>
          <nav className="breadcrumb">
            <span className="breadcrumb-span">Home</span>
            <span>/</span>
            <span>Security</span>
          </nav>
        </div>
        <div className="home-content xs-12">
          {
          type === reportActions.GET_SECURITY_REPORTS_SUCCESSFUL
          && Object.keys(reports).map((val, ind) => (
            <div key={ind} className="col xs-12 sm-6 md-4 ">
              <Card {...reports[val]} />
            </div>
          ))
        }
        </div>
      </SecurityStyle>
    );
  }
}

const mapStatesToProps = states => ({
  type: states.report.action,
  reports: states.report.reports,
});
const mapDispatchToProps = dispatch => ({
  fetchSecurityReports: () => {
    dispatch(reportMethods.fetchSecurityReports());
  },
});

export default connect(mapStatesToProps,
  mapDispatchToProps)(Home);
