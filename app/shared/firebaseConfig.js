import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBokj3-_OhHSm9HGaMmQ483nMXKnzUD-WM",
    authDomain: "news-c36cc.firebaseapp.com",
    projectId: "news-c36cc",
    storageBucket: "news-c36cc.appspot.com",
    messagingSenderId: "235798443005",
    appId: "1:235798443005:web:e1e5b5c705d83767e65f94",
    measurementId: "G-4X6Z2ZH6NT"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()