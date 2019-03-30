import {
  database, initializeApp, messaging, auth, storage,
} from 'firebase/app';
import { FirebaseConfig } from './key';
// Add additional services that you want to use
require('firebase/auth');
require('firebase/database');
require('firebase/storage');
// require('firebase/firestore');
require('firebase/messaging');
// require('firebase/functions');

initializeApp(FirebaseConfig);

const databaseRef = database().ref();
// export const usersRef = databaseRef.child('Users');
export const reportsRef = databaseRef.child('reports');
export const messageRef = databaseRef.child('messages');
export const replyRef = databaseRef.child('replies');
export const getUser = uid => databaseRef.child(`users/${uid}`);
export const UsersRef = databaseRef.child('users');
export const noticeRef = databaseRef.child('notices');
export const storageRef = storage().ref();
export const Auth = auth();
export const askForPermissioToReceiveNotifications = async () => {
  try {
    const message = messaging();
    await message.requestPermission();
    const token = await message.getToken();
    return token;
  } catch (error) {
    console.error(error);
  }
};
