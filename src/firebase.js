import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFErH0Z6srb7-PE1vnvSPpcMXXu1jjBEE",
  authDomain: "clone-7e76a.firebaseapp.com",
  projectId: "clone-7e76a",
  storageBucket: "clone-7e76a.appspot.com",
  messagingSenderId: "360547305911",
  appId: "1:360547305911:web:ea8b60109aa86f3c6e8032",
  measurementId: "G-MY01G6C3H8",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
