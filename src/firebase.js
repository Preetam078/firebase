// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCmu9CjsixH6TOvhX0tI8lXx1F_Nf0XMk",
  authDomain: "tutorial-f5680.firebaseapp.com",
  projectId: "tutorial-f5680",
  storageBucket: "tutorial-f5680.appspot.com",
  messagingSenderId: "803065030081",
  appId: "1:803065030081:web:fa299e4fe78249dfd57b40",
  measurementId: "G-X2SHNNQ0XF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
