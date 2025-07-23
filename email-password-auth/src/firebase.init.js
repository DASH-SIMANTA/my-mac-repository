// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Do not share config in public
const firebaseConfig = {
  apiKey: "AIzaSyB4GLWg49H1du7BKVBzbstfSyvGcU0SjSI",
  authDomain: "email-password-auth-418c9.firebaseapp.com",
  projectId: "email-password-auth-418c9",
  storageBucket: "email-password-auth-418c9.firebasestorage.app",
  messagingSenderId: "535448427141",
  appId: "1:535448427141:web:d3ba1ac9d6063de6fe67ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);