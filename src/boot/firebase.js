import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

firebase.initializeApp(config);
firebase.auth().useDeviceLanguage();

const DATABASE = 'check-in-app';
const TABLE = 'users';

export const storage = firebase.storage();

export const db = firebase.database().ref(DATABASE);

export const ref = firebase.database().ref(`${DATABASE}/${TABLE}`);

// Auth
// export const auth = firebase.auth();

// For google sign in
// export const provider = new firebase.auth.GoogleAuthProvider();
