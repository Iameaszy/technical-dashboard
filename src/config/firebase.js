import * as firebase from 'firebase';

import { FirebaseConfig } from './key';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child('Users');
export const reportsRef = databaseRef.child('reports');
