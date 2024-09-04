import firebase from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJBcoYDXQCFwhGU3n4W1IWZR7SPEQfqNI",
  authDomain: "assistencia-24h-804f7.firebaseapp.com",
  projectId: "assistencia-24h-804f7",
  storageBucket: "assistencia-24h-804f7.appspot.com",
  messagingSenderId: "936125504484",
  appId: "1:936125504484:web:d8c2b58016ca5089d485f1",
  measurementId: "G-9F6F5033W5",
};

const app = firebase.initializeApp(firebaseConfig);

export const imageDb = getStorage(app);
