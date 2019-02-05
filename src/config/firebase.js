import { database, initializeApp } from 'firebase/app';
import { FirebaseConfig } from './key';
// Add additional services that you want to use
// require('firebase/auth');
require('firebase/database');
// require('firebase/firestore');
// require('firebase/messaging');
// require('firebase/functions');

initializeApp(FirebaseConfig);

const databaseRef = database().ref();
export const usersRef = databaseRef.child('Users');
export const reportsRef = databaseRef.child('reports');
