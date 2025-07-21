// Do not store config  on the clint side..this is for now

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABTiD7M69JqWuiSot7fiUbWnWap3XWmgQ",
  authDomain: "simple-firebase-e0963.firebaseapp.com",
  projectId: "simple-firebase-e0963",
  storageBucket: "simple-firebase-e0963.firebasestorage.app",
  messagingSenderId: "773723981221",
  appId: "1:773723981221:web:e4a3afdec06251c2c7944c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;