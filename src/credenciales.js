// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdCXLvlClpUQUJ6dZzaW_C7HvGPerqJGg",
  authDomain: "login-df41d.firebaseapp.com",
  projectId: "login-df41d",
  storageBucket: "login-df41d.firebasestorage.app",
  messagingSenderId: "799574160737",
  appId: "1:799574160737:web:a722dbee30f67fc5150120"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase