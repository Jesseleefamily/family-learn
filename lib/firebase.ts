// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBe5vBCGrFptg1mm_QJyB41F0t5XtmIHBT",
  authDomain: "family-learn.firebaseapp.com",
  projectId: "family-learn",
  storageBucket: "family-learn.appspot.com",
  messagingSenderId: "901799403433",
  appId: "1:901799403433:web:5524c7aba0c162aff09660"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
