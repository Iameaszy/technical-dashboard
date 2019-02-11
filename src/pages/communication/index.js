import React from 'react';
import { connect } from 'react-redux';
import {
  FaTrash, FaRegEnvelope, FaShare, FaRegFile, FaRegStar,
} from 'react-icons/fa';
import { MdFileUpload } from 'react-icons/md';
import { createGlobalStyle } from 'styled-components';
import { CommSideStyle, CommStyle, MainCommStyle } from './communication.style';
import { ComposeComponent } from './compose/index';
import modalActions from '../../redux/actions/modals';

const GlobalStyle = createGlobalStyle`
  body {
    /*overflow-y:hidden;*/
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
    this.state = { mailActiveOptions: 0 };
  }

  onMailOptionClick(ind) {
    this.setState({ mailActiveOptions: ind });
  }

  render() {
    const { mailActiveOptions } = this.state;
    const {
      type, compose, show, closeCompose,
    } = this.props;
    return (
      <React.Fragment>
        <GlobalStyle />
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
                    main
          </MainCommStyle>
          {
            type === modalActions.SHOW_COMPOSE_MESSAGE && show
            && <ComposeComponent close={closeCompose} />
          }
        </CommStyle>
      </React.Fragment>
    );
  }
}
const mapStateToProps = states => ({
  type: states.modal.type,
  show: states.modal.display,
});
const mapDispatchToProps = dispatch => ({
  compose: () => {
    dispatch({ type: modalActions.SHOW_COMPOSE_MESSAGE, display: true });
  },
  closeCompose: () => {
    dispatch({ type: modalActions.SHOW_COMPOSE_MESSAGE, display: false });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunicationComponent);
