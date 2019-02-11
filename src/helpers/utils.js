import axios from 'axios';
import { askForPermissioToReceiveNotifications } from '../config/firebase';

export const getQueryString = str => str.split('?')[1];
export const extractMessage = res => (res && res.response
  ? res.response.message || res.response.data.message
  : 'Connection Error');

export const validator = (val, type) => {
  switch (type) {
    case 'email':
      return !!(val
        && val !== ''
        && val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)); // returns a boolean

    case 'password':
      return val && val !== '' && val.length >= 6;

    case 'tel':
      return !!(val && val !== '' && val.length > 5 && val.match(/^[+]?\d+$/)); // returns a boolean

    default:
      return !!(val && val !== '' && val.match(/\S+/));
  }
};

export const sendNotificationToUser = (msg = '') => {
  askForPermissioToReceiveNotifications().then((token) => {
    axios.post('https://fcm.googleapis.com/fcm/send', {
      notification: {
        title: 'Reporter',
        body: msg,
        click_action: 'http://localhost:3000/',
        icon: 'https://image.flaticon.com/icons/svg/1162/1162490.svg',
      },
      to: token,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'key=AAAAoYElpKY:APA91bF_rruf0ptlOdRW0Hca0zV4F1GD6KfJqied4dKoY5VbzgPP388r21xvbOYfohlwf7OtGcStjcWRWGUsRjKluymIAQVG6dRO09wUXNRt4z5z5yXulUT28Wvk2xm30s8ehvssPhX8',
      },
    }).then(() => {
      console.log('notification sent');
    })
      .catch(err => console.log(err));
  });
};
