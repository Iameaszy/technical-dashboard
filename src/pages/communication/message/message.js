import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import qs from 'query-string';
import { FaArrowCircleLeft } from 'react-icons/fa';
import moment from 'moment';
import messageActions from '../../../redux/actions/message';
import * as messageActionsCreator from '../../../redux/action-creators/message';
import { MessageStyle } from './message.style';
import Loader from '../../../assets/flickr-loader.svg';

export class MessagePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { qs: null, message: null };
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(msg) {
    this.props.markMessageAsRead(msg);
  }

  componentDidMount() {
    const parsedUrl = qs.parse(this.props.location.search) || {};
    if (!parsedUrl || !('id' in parsedUrl)) {
      this.props.history.push('/');
    }
    this.setState({ qs: parsedUrl });
    this.props.getMessage(parsedUrl.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type && this.props.type === messageActions.GET_MESSAGE_SUCCESSFUL) {
      const { message } = this.props;
      const { qs } = this.state;
      this.setState({ message: message || null });

      if (message) {
        message.id = qs.id;
        this.markAsRead(message);
      }
    }
  }

  render() {
    const { message } = this.state;
    return (
      <MessageStyle>
        {
            message
              && (
              <React.Fragment>
                <section className="message-wrapper col xs-12 sm-6 md-12">
                  <h2 className="subject">{message.subject}</h2>
                  <h3 className="from">{message.from}</h3>
                  <h4 className="date">{moment(message.date).toLocaleString()}</h4>
                  <p className="message">{message.message}</p>
                </section>
                <Link to="/communications"><FaArrowCircleLeft size={28} /></Link>
              </React.Fragment>
              )
        }
        { this.props.type === messageActions.GET_MESSAGE_REQUEST
            && <p><img src={Loader} alt="loader" /></p>
        }
      </MessageStyle>
    );
  }
}


const mapStatesWithProps = states => ({
  message: states.message.message,
  type: states.message.type,
});
const mapDispatchWithStates = dispatch => ({
  getMessage: (id) => {
    dispatch(messageActionsCreator.fetchMessage(id));
  },
  markMessageAsRead: msg => dispatch(messageActionsCreator.markAsRead(msg)),
});
export default connect(mapStatesWithProps, mapDispatchWithStates)(withRouter(MessagePage));
