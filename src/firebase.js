// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdLqkDLKSC7FqWrZlYNx5sodeuUhHxZpc",
  authDomain: "my-electricity-bill.firebaseapp.com",
  projectId: "my-electricity-bill",
  storageBucket: "my-electricity-bill.appspot.com",
  messagingSenderId: "1013634835117",
  appId: "1:1013634835117:web:5a47b15b6bd8c56cb9dc24",
  measurementId: "G-3HZ09N4X59"
};

const app = initializeApp(firebaseConfig)
// Initialize Firebase and Firebase Authentication
export const db =   getDatabase(app);  //firebaseApp.firestore();
export const auth = getAuth();

