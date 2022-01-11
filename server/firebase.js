// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBvcJfoTZWUnsiUsqiMTbT2kMYbZxy5Wug',
  authDomain: 'guisee.firebaseapp.com',
  projectId: 'guisee',
  storageBucket: 'guisee.appspot.com',
  messagingSenderId: '476606097186',
  appId: '1:476606097186:web:808d398d0040e91e6fe77b',
  measurementId: 'G-WXM6EQHHYR',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
