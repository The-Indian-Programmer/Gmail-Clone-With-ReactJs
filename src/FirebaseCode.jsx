import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCEfs24OyrfAFYxWQtJCqIexSBJR8MjWSQ",
  authDomain: "clone-33ce9.firebaseapp.com",
  projectId: "clone-33ce9",
  storageBucket: "clone-33ce9.appspot.com",
  messagingSenderId: "424462314375",
  appId: "1:424462314375:web:924b734835c842e0494122",
  measurementId: "G-36JHH2KV7Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};