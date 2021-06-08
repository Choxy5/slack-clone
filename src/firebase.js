import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCc3OrNw4WMjgI2e_g74TFmA7-QfkjabYA',
  authDomain: 'slack-clone-fa5e0.firebaseapp.com',
  projectId: 'slack-clone-fa5e0',
  storageBucket: 'slack-clone-fa5e0.appspot.com',
  messagingSenderId: '612367186773',
  appId: '1:612367186773:web:41549a86242755b5f68ddc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
