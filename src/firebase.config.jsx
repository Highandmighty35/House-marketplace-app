import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4eNGuXlnImqFZeBrHA-e72Rr0b4fkYmQ",
  authDomain: "house-marketplace-app-83b7e.firebaseapp.com",
  projectId: "house-marketplace-app-83b7e",
  storageBucket: "house-marketplace-app-83b7e.appspot.com",
  messagingSenderId: "246682654921",
  appId: "1:246682654921:web:2b4710a710ab9ced349518",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
