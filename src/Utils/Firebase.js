// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpI2KCcD0vZeIUAlIR5SkeNmDr4FMX8Y",
  authDomain: "netflix-gpt-5a224.firebaseapp.com",
  projectId: "netflix-gpt-5a224",
  storageBucket: "netflix-gpt-5a224.appspot.com",
  messagingSenderId: "282318624266",
  appId: "1:282318624266:web:111ab2be71c4545864f1f3",
  measurementId: "G-QHX13LLXWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
