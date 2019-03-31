import React from 'react';
import { connect } from 'react-redux';
import {
  FaRegEnvelope, FaShare, FaRegFile, FaRegStar,
} from 'react-icons/fa';

import { createGlobalStyle } from 'styled-components';
import {
  CommSideStyle, CommStyle, MainCommStyle,
} from './communication.style';
import ComposeComponent from './compose/index';
import modalActions from '../../redux/actions/modals';
import * as messageActionCreators from '../../redux/action-creators/message';
import * as NotificationComponents from '../../shared-components/notification/index';
import messageAction from '../../redux/actions/message';
import { List } from './list/index';
import { Control } from './control/control';
import Loader from '../../assets/flickr-loader.svg';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y:hidden;
  }

  @media only screen and (max-width: 600px){
      .gBFetE .content{
            padding:0 !important;
          }
      }
`;

const options = ['Inbox', 'Sent', 'Draft', 'Starred'];
const setIcon = (ind) => {
  switch (ind) {
    case 0: return <FaRegEnvelope size={14} />;
    case 1: return <FaShare size={14} />;
    case 2: return <FaRegFile size={14} />;
    case 3: return <FaRegStar size={14} />;
  }
};
export class CommunicationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onMailOptionClick = this.onMailOptionClick.bind(this);
    this.state = {
      mailActiveOptions: 0,
      notification: {
        status: false, message: '', type: 'Notification2',
      },
      mobileToggle: false,
      messages: [],
      noMoreReports: false,
      messageChecked: false,
      controlClicked: false,
    };
    this.timeout = null;
    this.onMessageChecked = this.onMessageChecked.bind(this);
    this.checkAllLists = this.checkAllLists.bind(this);
    this.onStarChecked = this.onStarChecked.bind(this);
    this.handleOptionsClick = this.handleOptionsClick.bind(this);
    this.setNotification = this.setNotification.bind(this);
    this.handleMobileToggle = this.handleMobileToggle.bind(this);
    this.deleteCheckedMessages = this.deleteCheckedMessages.bind(this);
  }

  componentDidMount() {
    const { auth } = this.props;
    this.props.fetchMessages(auth.data);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleMobileToggle(status) {
    const { mobileToggle } = this.state;
    this.setState({ mobileToggle: status || !mobileToggle });
  }

  deleteCheckedMessages() {
    const { messages } = this.state;
    this.props.deleteMessages(messages);
  }

  onMessageChecked(id) {
    let checked = false;
    const messages = this.state.messages.map((val) => {
      if (val.id === id) {
        if (val.checked) {
          val.checked = false;
        } else {
          val.checked = true;
        }
      }
      if (val.checked) {
        checked = true;
      }
      return val;
    });
    this.setState({ messages, messageChecked: checked });
  }

  onStarChecked(id) {
    const messages = this.state.messages.map((val) => {
      if (val.id === id) {
        if (val.important) {
          val.important = false;
          this.props.markAsImportant(val.id, false);
        } else {
          val.important = true;
          this.props.markAsImportant(val.id, true);
        }
      }
      return val;
    });
    this.setState({ messages });
  }

  checkAllLists() {
    let checked = false;
    const messages = this.state.messages.map((val) => {
      if (val.checked === true) {
        val.checked = false;
      } else if (this.state.messageChecked === true) {
        val.checked = false;
      } else {
        val.checked = true;
        checked = true;
      }
      return val;
    });
    this.setState({ messages, messageChecked: checked });
  }

  setNotification(msg, notType, type, timeout) {
    this.setState({
      notification: {
        type: type === true ? 'Notification1' : 'Notification2',
        status: true,
        notType,
        message: msg || 'Message Sent',
      },
    });


    if (!type) {
      this.timeout = setTimeout(() => {
        this.setState({
          notification: {
            type: 'Notification2',
            status: false,
            message: '',
          },
        });
      }, timeout || 2000);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message.type !== this.props.message.type && nextProps.message.type === messageAction.SEND_MESSAGE_SUCCESSFUL) {
      this.setNotification();
      if (this.state.controlClicked) {
        this.handleMobileToggle(false);
        this.setState({ controlClicked: false });
      }
    }

    if (nextProps.show === true && nextProps.type === modalActions.SHOW_COMPOSE_MESSAGE) {
      this.handleMobileToggle(false);
    }
    if (nextProps.message.type === messageAction.GET_MESSAGES_SUCCESSFUL || nextProps.message.type === messageAction.STAR_MESSAGE_SUCCESSFUL) {
      const messages = Object.keys(nextProps.message.messages).map((val) => {
        const data = { ...nextProps.message.messages[val] };
        data.id = val;
        data.checked = false;
        return data;
      });
      const stateMessages = [...this.state.messages];

      this.setState({ messages }, () => {
        if (stateMessages.length === this.state.messages.length) {
          this.setState({ noMoreReports: true });
          window.removeEventListener('scroll', this.handleScroll);
        }
      });

      if (this.state.controlClicked) {
        this.handleMobileToggle(false);
        this.setState({ controlClicked: false });
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onMailOptionClick(ind) {
    this.setState({ mailActiveOptions: ind });
  }

  handleOptionsClick(ind) {
    const { auth } = this.props;
    switch (ind) {
      case 0: return this.setState({ controlClicked: true }, () => {
        this.props.fetchMessages(auth.data);
      });
      case 1: return this.setState({ controlClicked: true }, () => {
        this.props.fetchSentMessages();
      });
      case 2: return this.setState({ controlClicked: true }, () => {
        this.props.fetchDrafts();
      });
      case 3: return this.setState({ controlClicked: true }, () => {
        this.props.fetchStarredMessages();
      });
      default: return null;
    }
  }

  render() {
    const { mailActiveOptions, notification, mobileToggle } = this.state;
    const { type: notificationType, message: notificationMessage } = notification;
    const Notification = NotificationComponents[notificationType];
    const {
      type, compose, show, closeCompose, message, auth, sendMessage,
    } = this.props;
    const { messages } = this.state;

    return (
      <React.Fragment>
        {/* <GlobalStyle /> */}
        <Notification {...notification}>
          {notificationMessage}
        </Notification>
        <Control onMessageDelete={this.deleteCheckedMessages} onToggled={this.handleMobileToggle} checkAllLists={this.checkAllLists} checked={this.state.messageChecked} />
        <CommStyle>
          <CommSideStyle className="comm-sidebar" toggled={mobileToggle}>
            <div className="compose-btn-container">
              <button onClick={() => { compose(); }} className="compose-btn" type="button">Compose</button>
            </div>

            <ul className="mail-options-container">
              {options.map((val, ind) => (
                <li
                  key={ind}
                  onClick={() => {
                    this.onMailOptionClick(ind);
                    this.handleOptionsClick(ind);
                  }}
                  className={mailActiveOptions === ind ? 'mail-option active' : 'mail-option'}
                >
                  <span className="icon">
                    {setIcon(ind)}
                  </span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </CommSideStyle>
          <MainCommStyle className="xs-12">
            {(this.props.message.type === messageAction.GET_MESSAGES_SUCCESSFUL || this.props.message.type === messageAction.STAR_MESSAGE_SUCCESSFUL || this.props.message.type === messageAction.SEND_MESSAGE_SUCCESSFUL) && messages.map((val, ind) => <List onStarChecked={this.onStarChecked} key={ind} {...val} onMessageChecked={this.onMessageChecked} />)
              }

            {this.props.message.type === messageAction.GET_MESSAGES_SUCCESSFUL
            && messages.length <= 0 && <p>No Message</p>
              }

            {
                this.props.message.type === messageAction.GET_MESSAGES_REQUEST
                && <p><img src={Loader} alt="loader" /></p>
              }
          </MainCommStyle>
          {
            type === modalActions.SHOW_COMPOSE_MESSAGE && show
            && <ComposeComponent sendMessage={sendMessage} message={message} auth={auth} close={closeCompose} />
          }
        </CommStyle>
      </React.Fragment>
    );
  }
}
const mapStateToProps = states => ({
  type: states.modal.type,
  show: states.modal.display,
  message: states.message,
  auth: states.auth,
});
const mapDispatchToProps = dispatch => ({
  compose: () => {
    dispatch({ type: modalActions.SHOW_COMPOSE_MESSAGE, display: true });
  },
  closeCompose: () => {
    dispatch({ type: modalActions.SHOW_COMPOSE_MESSAGE, display: false });
  },
  clearMessageAction: () => {
    dispatch({ type: modalActions.SHOW_COMPOSE_MESSAGE, display: false });
  },
  sendMessage: obj => dispatch(messageActionCreators.sendMessage(obj)),
  fetchMessages: (obj) => { dispatch(messageActionCreators.fetchMessages(obj)); },
  fetchSentMessages: count => dispatch(messageActionCreators.fetchSentMessages(count)),
  fetchStarredMessages: count => dispatch(messageActionCreators.fetchStarredMessages(count)),
  markAsImportant: (id, star) => dispatch(messageActionCreators.starMessage(id, star)),
  fetchDrafts: () => dispatch(messageActionCreators.fetchDrafts()),
  deleteMessages: messages => dispatch(messageActionCreators.deleteMessages(messages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunicationComponent);
