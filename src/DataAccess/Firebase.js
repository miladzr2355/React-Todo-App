// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todo-react-e3c41.firebaseapp.com",
  projectId: "todo-react-e3c41",
  storageBucket: "todo-react-e3c41.appspot.com",
  messagingSenderId: "352764207408",
  appId: "1:352764207408:web:3080e5b00b18931c70a8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);