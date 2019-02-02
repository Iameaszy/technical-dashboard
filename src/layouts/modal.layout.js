import React from 'react';
import { connect } from 'react-redux';
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import modal_actions from '../redux/actions/modals';
import ModalStyle from '../pages/auth/styles/modal';
import PleaseLogin from '../pages/pure_modals/please_login';
import EditChicken from '../pages/table/edit';

const mapStateToProps = state => ({
  bool: state.modal.show,
  type: state.modal.type,
  data: state.modal.data,
});

const mapDispatchToPrpos = dispatch => ({
  closeModal: () => dispatch({ type: modal_actions.SHOW_NOTHING }),
});
const Modals = ({ type, data }) => {
  switch (type) {
    case modal_actions.SHOW_SIGNIN:
      return <Signin />;
    case modal_actions.SHOW_SIGNUP:
      return <Signup />;
    case modal_actions.SHOW_PLEASE_LOGIN:
      return <PleaseLogin />;
    case modal_actions.SHOW_EDIT:
      return <EditChicken data={data} />;
    default:
      return null;
  }
};

const ModalLayout = props => (props.bool ? (
  <ModalStyle onClick={props.closeModal}>
    <button style={{ cursor: 'pointer', outline: 'none' }} onClick={props.closeModal} id="close-modal">
        X
    </button>
    <Modals {...props} />
  </ModalStyle>
) : null);

export default connect(
  mapStateToProps,
  mapDispatchToPrpos,
)(ModalLayout);
