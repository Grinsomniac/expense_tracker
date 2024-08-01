// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCda0xQ3ai9Wet7CSdzb4GrFVT-Bwdonuo",
  authDomain: "expense-tracker-b87a4.firebaseapp.com",
  projectId: "expense-tracker-b87a4",
  storageBucket: "expense-tracker-b87a4.appspot.com",
  messagingSenderId: "464344228265",
  appId: "1:464344228265:web:0a230b904f7876fdcba4b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);