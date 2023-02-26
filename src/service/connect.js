// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Rjt9Miv3hqChZy0RCFS_fnaNrhsNoSo",
  authDomain: "ecmascript6-e8e12.firebaseapp.com",
  databaseURL:
    "https://ecmascript6-e8e12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecmascript6-e8e12",
  storageBucket: "ecmascript6-e8e12.appspot.com",
  messagingSenderId: "94151137584",
  appId: "1:94151137584:web:23c62d2b5c41fd106310f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const getAuth = getAuth(app);
console.log(app);
