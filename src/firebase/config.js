import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABy-kzLptzg-4kjn9p9-DMGO6Pjfi2hv8",
    authDomain: "todoapp---react.firebaseapp.com",
    projectId: "todoapp---react",
    storageBucket: "todoapp---react.appspot.com",
    messagingSenderId: "893313707596",
    appId: "1:893313707596:web:0269fa3f1de7d3edd98ee9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp)
export const firebaseBD = getFirestore(firebaseApp)