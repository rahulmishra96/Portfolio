import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLCR9utY_yj-eIlewCgfuGnfKB4SMqwrQ",
  authDomain: "react-portfolio-rahul.firebaseapp.com",
  projectId: "react-portfolio-rahul",
  storageBucket: "react-portfolio-rahul.appspot.com",
  messagingSenderId: "333581300459",
  appId: "1:333581300459:web:b88261b8365512462b84ae",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
