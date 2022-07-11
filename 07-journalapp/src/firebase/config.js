import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBxLX_V3bbmj8NF3T6amRXmY0gZaDSDUbI",
  authDomain: "react-f163a.firebaseapp.com",
  projectId: "react-f163a",
  storageBucket: "react-f163a.appspot.com",
  messagingSenderId: "430794397936",
  appId: "1:430794397936:web:44d24fadf95184fac6ca35"
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( app );
export const firebaseDB = getFirestore( app );