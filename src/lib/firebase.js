import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6XCkBtQJTitzmLIJhNHdGyw1Ejx0cKCU",
    authDomain: "social-app-35c04.firebaseapp.com",
    projectId: "social-app-35c04",
    storageBucket: "social-app-35c04.firebasestorage.app",
    messagingSenderId: "294442755598",
    appId: "1:294442755598:web:6e2b35bb24bcd15bf3be5f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)