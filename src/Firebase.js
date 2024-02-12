
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBl7o27etpPTSFyL21Qhqfq2bap5rHnQTs",
  authDomain: "revedate-54351.firebaseapp.com",
  projectId: "revedate-54351",
  storageBucket: "revedate-54351.appspot.com",
  messagingSenderId: "1043883996433",
  appId: "1:1043883996433:web:6d6141a561206288e788b0",
  measurementId: "G-5SZ920PLQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export   const db = getFirestore(app);
    
