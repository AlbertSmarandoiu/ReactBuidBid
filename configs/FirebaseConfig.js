// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhzCDBMniYIeYfp9XvDgrV_ZgBT65ez6U",
  authDomain: "buidbid-ef1a7.firebaseapp.com",
  projectId: "buidbid-ef1a7",
  storageBucket: "buidbid-ef1a7.appspot.com",
  messagingSenderId: "111475402918",
  appId: "1:111475402918:web:fe733872cb7b97a8826c67",
  measurementId: "G-97KN296TZQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);