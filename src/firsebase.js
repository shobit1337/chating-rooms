import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLBWZrEMnAfLejjkJHgtUO6lqxLYWXoig",
  authDomain: "slack-clone-7e615.firebaseapp.com",
  projectId: "slack-clone-7e615",
  storageBucket: "slack-clone-7e615.appspot.com",
  messagingSenderId: "742559300359",
  appId: "1:742559300359:web:2c0f58288633ad8435a3a2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
