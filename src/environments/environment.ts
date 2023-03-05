// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5GDQ2f8c8MF6rketBMmJ-mWp9IqJIS40",
  authDomain: "lavalanche-ee986.firebaseapp.com",
  projectId: "lavalanche-ee986",
  storageBucket: "lavalanche-ee986.appspot.com",
  messagingSenderId: "1088594733736",  appId: "1:1088594733736:web:932374e4391f0d06c1309d",
  measurementId: "G-C84R4G3W5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
