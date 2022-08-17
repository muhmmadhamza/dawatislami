import firebase from "firebase";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAvQPCO9MYlkAzhtLzvS9kMHKrDMoFRgxk",
  authDomain: "social-reform-institute.firebaseapp.com",
  databaseURL: "https://social-reform-institute-default-rtdb.firebaseio.com",
  projectId: "social-reform-institute",
  storageBucket: "social-reform-institute.appspot.com",
  messagingSenderId: "58115568145",
  appId: "1:58115568145:web:d1744336e04288edc4b7b0",
  measurementId: "G-C7Z5D1XPHJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { firebase, storage };
