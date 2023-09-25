// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfZ_3HGCPmRjiM1BSAGVOz5lWOHIY5mbE",
  authDomain: "react-hooks-blog-39717.firebaseapp.com",
  projectId: "react-hooks-blog-39717",
  storageBucket: "react-hooks-blog-39717.appspot.com",
  messagingSenderId: "899990656065",
  appId: "1:899990656065:web:305d8599a78acf920a62c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
export const db=getFirestore(app);