import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3uvMJ323irkJyLPPPWEbRxg6AVeOSbyA",
  authDomain: "whatsapp-clone-7af61.firebaseapp.com",
  projectId: "whatsapp-clone-7af61",
  storageBucket: "whatsapp-clone-7af61.appspot.com",
  messagingSenderId: "620959326678",
  appId: "1:620959326678:web:ccc73330675bfc80fd4477",
  measurementId: "G-7FKPFE6T0G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};