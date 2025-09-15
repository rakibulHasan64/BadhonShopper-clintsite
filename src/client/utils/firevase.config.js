// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCigT5urHcYlBiDOUGPJMgtKHLrnXujDyk",
  authDomain: "zyanlife-3782b.firebaseapp.com",
  projectId: "zyanlife-3782b",
  storageBucket: "zyanlife-3782b.firebasestorage.app",
  messagingSenderId: "1039359907082",
  appId: "1:1039359907082:web:0d3edad439e438aa4396f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };





