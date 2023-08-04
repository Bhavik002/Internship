// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 // addd your key and configuration details
 apiKey: "AIzaSyBI3lRKjJYe0LI7aDUBEnmauvpmkAKZ2h8",
  authDomain: "house-market-6b2bc.firebaseapp.com",
  projectId: "house-market-6b2bc",
  storageBucket: "house-market-6b2bc.appspot.com",
  messagingSenderId: "499327922828",
  appId: "1:499327922828:web:b61c62da012ef31cc9c1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
