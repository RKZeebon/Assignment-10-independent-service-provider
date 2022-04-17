// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  // I tried but got error. So I skip this part.  

  apiKey: "AIzaSyBMeltBnFsSXe4-KTy-EKq2bAJT2XDVbA4",
  authDomain: "rkz-photography18.firebaseapp.com",
  projectId: "rkz-photography18",
  storageBucket: "rkz-photography18.appspot.com",
  messagingSenderId: "615690105953",
  appId: "1:615690105953:web:f345560cc1cac9c0a5e620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;