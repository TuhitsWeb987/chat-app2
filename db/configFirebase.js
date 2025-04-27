import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_JCGCybMxhWK0nRBKgbhk4m-K2AD4XgU",
  authDomain: "chat-app-da028.firebaseapp.com",
  projectId: "chat-app-da028",
  storageBucket: "chat-app-da028.firebasestorage.app",
  messagingSenderId: "146158642743",
  appId: "1:146158642743:web:e0c7376a3144b4a1e681b2"
};

export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)
export const auth =  getAuth(app)
