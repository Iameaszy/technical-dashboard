import React from 'react';
import { connect } from 'react-redux';
import {
  FaTrash, FaRegEnvelope, FaShare, FaRegFile, FaRegStar,
} from 'react-icons/fa';
import { MdFileUpload } from 'react-icons/md';
import { createGlobalStyle } from 'styled-components';
import { CommSideStyle, CommStyle, MainCommStyle } from './communication.style';
import ComposeComponent from './compose/index';
import modalActions from '../../redux/actions/modals';
import * as messageActionCreators from '../../redux/action-creators/message';
import * as NotificationComponents from '../../shared-components/notification/index';
import messageAction from '../../redux/actions/message';
import { List } from './list/index';

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

const options = ['Inbox', 'Sent', 'Draft', 'Outbox', 'Starred', 'Trash'];
const setIcon = (ind) => {
  switch (ind) {
    case 0: return <FaRegEnvelope size={11} />;
    case 1: return <FaShare size={11} />;
    case 2: return <FaRegFile size={11} />;
    case 3: return <MdFileUpload size={14} />;
    case 4: return <FaRegStar size={11} />;
    default: return <FaTrash size={11} />;
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
      messages: {},
    };
    this.timeout = null;
  }

  componentDidMount() {
    const { auth } = this.props;
    this.props.fetchMessages(auth.data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message.type !== this.props.message.type && nextProps.message.type === messageAction.SEND_MESSAGE_SUCCESSFUL) {
      this.setState({
        notification: {
          type: 'Notification2',
          status: true,
          message: 'Message Sent',
        },
      });

      this.timeout = setTimeout(() => {
        this.setState({
          notification: {
            type: 'Notification2',
            status: false,
            message: '',
          },
        });
      }, 2000);
    }

    if (nextProps.message.type === messageAction.GET_MESSAGES_SUCCESSFUL) {
      this.setState(() => ({ messages: nextProps.message.messages || {} }));
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }


  onMailOptionClick(ind) {
    this.setState({ mailActiveOptions: ind });
  }

  render() {
    const { mailActiveOptions, notification } = this.state;
    const { type: notificationType, message: notificationMessage, status } = notification;
    const Notification = NotificationComponents[notificationType];
    const {
      type, compose, show, closeCompose, message, auth, sendMessage,
    } = this.props;
    const { messages } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Notification status={status}>
          {notificationMessage}
        </Notification>
        <CommStyle>
          <CommSideStyle className="comm-sidebar">
            <div className="compose-btn-container">
              <button onClick={() => { compose(); }} className="compose-btn" type="button">Compose</button>
            </div>

            <ul className="mail-options-container">
              {options.map((val, ind) => (
                <li
                  key={ind}
                  onClick={() => {
                    this.onMailOptionClick(ind);
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
            {Object.keys(messages).map((val, ind) => <List key={ind} {...messages[val]} />)
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunicationComponent);
