// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbsl2G8-PnXYtvrvX5RQJF1yK139NJh-U",
    authDomain: "fajitobiloba.firebaseapp.com",
    projectId: "fajitobiloba",
    storageBucket: "fajitobiloba.appspot.com",
    messagingSenderId: "544207555609",
    appId: "1:544207555609:web:e1565e34c911fd864fae88",
    measurementId: "G-DRRZ02RHTX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
