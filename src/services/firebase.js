// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBWLJ1l27SAbkfzVw2heEcSEY1eKdZUvLM",
    authDomain: "chat-990af.firebaseapp.com",
    databaseURL: "https://chat-990af-default-rtdb.firebaseio.com",
    projectId: "chat-990af",
    storageBucket: "chat-990af.appspot.com",
    messagingSenderId: "96310721043",
    appId: "1:96310721043:web:a286e5063f6c2c61641de6"
};

const Firebaseapp = initializeApp( config );
export const auth = getAuth();
export default Firebaseapp;
