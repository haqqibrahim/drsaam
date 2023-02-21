
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent  } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCRaqiCaHUZwPc0zHmMhqFIG9YpUojseaE",
    authDomain: "dr-saam.firebaseapp.com",
    projectId: "dr-saam",
    storageBucket: "dr-saam.appspot.com",
    messagingSenderId: "21926595256",
    appId: "1:21926595256:web:a041935f1fecddc408424d",
    measurementId: "G-BR25TVH7MN"
  }
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
