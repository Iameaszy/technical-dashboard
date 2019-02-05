import React from 'react';
import { connect } from 'react-redux';
import { FacilityStyle } from './facility.style';
import * as reportMethods from '../../redux/action-creators/reports';
import reportActions from '../../redux/actions/reports';
import Card from '../../shared-components/card';

export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchReports();
  }

  render() {
    const { type, reports } = this.props;
    return (
      <FacilityStyle>
        <div className="header">
          <div className="title">Reports</div>
          <nav className="breadcrumb">
            <span className="breadcrumb-span">Home</span>
          </nav>
        </div>
        <div className="home-content xs-12">
          {
          type === reportActions.GET_REPORTS_SUCCESSFUL
          && Object.keys(reports).map((val, ind) => (
            <div key={ind} className="col xs-12 sm-6 md-4 ">
              <Card {...reports[val]} />
            </div>
          ))
        }
        </div>
      </FacilityStyle>
    );
  }
}

const mapStatesToProps = states => ({
  type: states.report.action,
  reports: states.report.reports,
});
const mapDispatchToProps = dispatch => ({
  fetchReports: () => {
    dispatch(reportMethods.fetchReports());
  },
});

export default connect(mapStatesToProps,
  mapDispatchToProps)(Home);
