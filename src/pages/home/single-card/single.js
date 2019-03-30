import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import qs from 'query-string';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Moment from 'react-moment';
import reportActions from '../../../redux/actions/reports';
import * as reportActionsCreator from '../../../redux/action-creators/reports';
import { SingleCardStyle } from './single.style';
import Loader from '../../../assets/flickr-loader.svg';

export class SingleCardPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { qs: null, report: null };
    this.markAsSeen = this.markAsSeen.bind(this);
  }

  markAsSeen(report) {
    this.props.markReportAsSeen(report);
  }

  componentDidMount() {
    const parsedUrl = qs.parse(this.props.location.search) || {};
    if (!parsedUrl || !('id' in parsedUrl)) {
      this.props.history.push('/');
    }
    this.setState({ qs: parsedUrl });
    this.props.getReport(parsedUrl.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type && this.props.type === reportActions.GET_REPORT_SUCCESSFUL) {
      const { report } = this.props;
      const { qs } = this.state;
      this.setState({ report: report || null });

      if (report) {
        report.id = qs.id;
        this.markAsSeen(report);
      }
    }
  }

  render() {
    const { report, qs } = this.state;
    const { type } = this.props;
    const placeholder = 'https://via.placeholder.com/300?text=No+Image';

    return (
      <SingleCardStyle>
        {
            report
              && (
              <div className="col xs-12 sm-6 md-12">
                <section className="card">
                  <div className="img-wrapper">
                    <img className="card-img" alt="Card cap" src={report.image_url || placeholder} />
                  </div>
                  <div style={{ lineHeight: 1.2 }}>
                    <p className="card-text">
                      {report.report_message}
                    </p>
                    <p className="card-text">
                      <em>
                        Created &nbsp;
                        <Moment fromNow>
                          {report.report_date}
                        </Moment>
                      </em>
                    </p>
                    <Link to="/"><FaArrowCircleLeft size={28} /></Link>
                  </div>
                </section>
              </div>
              )
        }
        { this.props.type === reportActions.GET_REPORT_REQUEST
            && <p><img src={Loader} alt="loader" /></p>
        }
      </SingleCardStyle>
    );
  }
}


const mapStatesWithProps = states => ({
  report: states.report.report,
  type: states.report.type,
});
const mapDispatchWithStates = dispatch => ({
  getReport: (id) => {
    dispatch(reportActionsCreator.fetchReport(id));
  },
  markReportAsSeen: report => dispatch(reportActionsCreator.markAsSeen(report)),
});
export default connect(mapStatesWithProps, mapDispatchWithStates)(withRouter(SingleCardPage));
