// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxEsQLh5WpicsD3rTYXv6Ch_oEO8AMoB8",
  authDomain: "sritir-milonmela-2026.firebaseapp.com",
  projectId: "sritir-milonmela-2026",
  storageBucket: "sritir-milonmela-2026.firebasestorage.app",
  messagingSenderId: "255982360654",
  appId: "1:255982360654:web:eca3a11db8dc79df310b1f",
  measurementId: "G-4RRXRYMF0P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);