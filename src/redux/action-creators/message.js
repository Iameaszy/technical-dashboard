import messageActions from '../actions/message';
import modalActions from '../actions/modals';
import { messageRef } from '../../config/firebase';

export const fetchMessages = obj => async (dispatch) => {
  dispatch({
    type: messageActions.GET_MESSAGES_REQUEST,
  });
  await messageRef.orderByChild('to').equalTo(obj.email).limitToFirst(20).on('value', (dataSnapshot) => {
    dispatch({
      type: messageActions.GET_MESSAGES_SUCCESSFUL,
      messages: dataSnapshot.val(),
    });
  }, (error) => {
    dispatch({
      type: messageActions.GET_MESSAGES_FAILED,
      messages: error.message,
    });
  });
};

export const fetchMessage = id => async (dispatch) => {
  dispatch({
    type: messageActions.GET_MESSAGE_REQUEST,
  });
  messageRef.child(id).on('value', (dataSnapshot) => {
    dispatch({
      type: messageActions.GET_MESSAGE_SUCCESSFUL,
      message: dataSnapshot.val(),
    });
  }, (err) => {
    dispatch({
      type: messageActions.GET_MESSAGES_FAILED,
      message: err.message,
    });
  });
};


export const sendMessage = obj => async (dispatch) => {
  dispatch({
    type: messageActions.SEND_MESSAGE_REQUEST,
  });
  const newObj = { ...obj };
  newObj.viewed = false;
  newObj.important = false;
  newObj.date = Date.now();
  try {
    newObj.sent = true;
    await messageRef.push().set(newObj);
    dispatch({
      type: modalActions.SHOW_COMPOSE_MESSAGE,
      display: false,
    });

    dispatch({
      type: messageActions.SEND_MESSAGE_SUCCESSFUL,
    });
  } catch (err) {
    newObj.outbox = true;
    await messageRef.push().set(newObj);
    dispatch({
      type: modalActions.SHOW_COMPOSE_MESSAGE,
      display: false,
    });
    dispatch({
      type: messageActions.SEND_MESSAGE_FAILED,
      message: err.message,
    });
  }
};

export const fetchSentMessages = count => async (dispatch) => {
  dispatch({
    type: messageActions.GET_MESSAGES_REQUEST,
  });
  await messageRef.orderByChild('sent').equalTo(true).limitToFirst(count || 20).on('value', (dataSnapshot) => {
    dispatch({
      type: messageActions.GET_MESSAGES_SUCCESSFUL,
      messages: dataSnapshot.val(),
    });
  }, (error) => {
    dispatch({
      type: messageActions.GET_MESSAGES_FAILED,
      messages: error.message,
    });
  });
};


export const fetchStarredMessages = count => async (dispatch) => {
  dispatch({
    type: messageActions.GET_MESSAGES_REQUEST,
  });
  await messageRef.orderByChild('important').equalTo(true).limitToFirst(count || 20).on('value', (dataSnapshot) => {
    dispatch({
      type: messageActions.GET_MESSAGES_SUCCESSFUL,
      messages: dataSnapshot.val(),
    });
  }, (error) => {
    dispatch({
      type: messageActions.GET_MESSAGES_FAILED,
      messages: error.message,
    });
  });
};


export const starMessage = (id, star) => (dispatch) => {
  dispatch({
    type: messageActions.STAR_MESSAGE_REQUEST,
  });
  messageRef.child(id).update({ important: !!star }).then(() => {
    dispatch({
      type: messageActions.STAR_MESSAGE_SUCCESSFUL,
    });
  })
    .catch((error) => {
      dispatch({
        type: messageActions.GET_MESSAGES_FAILED,
        messages: error.message,
      });
    });
};
