import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-12.firebaseapp.com",
  projectId: "reactchat-12",
  storageBucket: "reactchat-12.appspot.com",
  messagingSenderId: "132661854952",
  appId: "1:132661854952:web:66c002b0fe10b689c0bf5d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
