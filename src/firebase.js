import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPx6ftIknaYwYxWPWjX2CKeaiAMgRziJ4",
    authDomain: "slack-clone-1342d.firebaseapp.com",
    databaseURL: "https://slack-clone-1342d.firebaseio.com",
    projectId: "slack-clone-1342d",
    storageBucket: "slack-clone-1342d.appspot.com",
    messagingSenderId: "528436400231",
    appId: "1:528436400231:web:e1539fd86d027f48fac4c2",
    measurementId: "G-Z07JHTSXBC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth;
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
