// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBDQvXSrAo9b06vERSagCGMPV-9aMqt_zw",
  authDomain: "clone-80123.firebaseapp.com",
  projectId: "clone-80123",
  storageBucket: "clone-80123.appspot.com",
  messagingSenderId: "850568931192",
  appId: "1:850568931192:web:ef72318d2b2abd58740a8d",
  measurementId: "G-X0EKJF4J0S",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { db, auth };