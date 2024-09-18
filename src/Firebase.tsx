import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChca7lbqW3recI6GjrLC6hXkiuzMLKOWg",
  authDomain: "portfolio-80fc5.firebaseapp.com",
  projectId: "portfolio-80fc5",
  storageBucket: "portfolio-80fc5.appspot.com",
  messagingSenderId: "292170025100",
  appId: "1:292170025100:web:78b779cb481a942aebd3a9",
  measurementId: "G-FZKMWM2232"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
