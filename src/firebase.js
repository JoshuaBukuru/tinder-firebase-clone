import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJsUWwcRRtza3yIwjDwZHcBFUysFHWtVo",
  authDomain: "tinder-clone-94d7b.firebaseapp.com",
  projectId: "tinder-clone-94d7b",
  storageBucket: "tinder-clone-94d7b.appspot.com",
  messagingSenderId: "190305988922",
  appId: "1:190305988922:web:885f3bef7864f9671ba003",
  measurementId: "G-TJNG52W4QW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
