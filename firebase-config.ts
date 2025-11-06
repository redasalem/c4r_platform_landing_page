// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC3FgCDHeE7aAL5lDyndojkU_yyaY5WHjI",
  authDomain: "car-platform-comments.firebaseapp.com",
  projectId: "car-platform-comments",
  storageBucket: "car-platform-comments.appspot.com", 
  messagingSenderId: "79567095465",
  appId: "1:79567095465:web:ffeea7d344fefbab10cbb8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
