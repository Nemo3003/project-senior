// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBr1xzGWX4MsJ6bjU4nIfT6pVry8Av0NuY",
  authDomain: "ocacoplus.firebaseapp.com",
  projectId: "ocacoplus",
  storageBucket: "ocacoplus.appspot.com",
  messagingSenderId: "978280220770",
  appId: "1:978280220770:web:eb41039cce16f3030aa93b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)