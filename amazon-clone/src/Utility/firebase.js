import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA80TDSDdKfPoY_NCUm4jnsnz0FphtMABk",
  authDomain: "clone-88f26.firebaseapp.com",
  projectId: "clone-88f26",
  storageBucket: "clone-88f26.appspot.com",
  messagingSenderId: "349231498220",
  appId: "1:349231498220:web:de5701ce5cf88e19e1f6c9",
  measurementId: "G-HBCYR4TEYZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore();
