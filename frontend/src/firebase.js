
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent  } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBozBJbH2GeKlLgSZhOOvt6z6KCh1yt5eA",
  authDomain: "saam-b212a.firebaseapp.com",
  projectId: "saam-b212a",
  storageBucket: "saam-b212a.appspot.com",
  messagingSenderId: "467301577444",
  appId: "1:467301577444:web:5e86880dab6879691372f1",
  measurementId: "G-P30B7K94RJ"
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
