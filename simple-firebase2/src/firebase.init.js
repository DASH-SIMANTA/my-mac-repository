// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//  DANGER: Do not share config publicly
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhsiZlH_VCVlHiicTyhzNTXEhz7qWUpDE",
  authDomain: "simple-firebase2-90691.firebaseapp.com",
  projectId: "simple-firebase2-90691",
  storageBucket: "simple-firebase2-90691.firebasestorage.app",
  messagingSenderId: "893295323071",
  appId: "1:893295323071:web:d22705d985cbf7f3d1630a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);