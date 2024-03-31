import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBHxOn0b3FRDBDQZxM-LFYr07GIOXO81sw",
    authDomain: "foricon-database.firebaseapp.com",
    projectId: "foricon-database",
    storageBucket: "foricon-database.appspot.com",
    messagingSenderId: "895804546140",
    appId: "1:895804546140:web:2e737ccdd006d4e8b7da99",
    measurementId: "G-2620Z04T3Q"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const dbFirestore = getFirestore(app);
export { app, auth, analytics, dbFirestore };