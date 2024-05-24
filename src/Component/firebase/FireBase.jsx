// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBINRy6fWzhzeqQE_e-DZrcnmv9PQuv2k",
  authDomain: "franko-mobileapp.firebaseapp.com",
  projectId: "franko-mobileapp",
  storageBucket: "franko-mobileapp.appspot.com",
  messagingSenderId: "927743638291",
  appId: "1:927743638291:web:441d287a6e35c9eea9b8e6",
  measurementId: "G-743CCLL0RW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
