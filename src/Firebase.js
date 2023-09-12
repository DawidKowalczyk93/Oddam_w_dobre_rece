// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBoYlcfphIgodIozfONL6fw67PsEQlbQA",
    authDomain: "fir-oddajrzeczy-auth.firebaseapp.com",
    projectId: "fir-oddajrzeczy-auth",
    storageBucket: "fir-oddajrzeczy-auth.appspot.com",
    messagingSenderId: "1080970357935",
    appId: "1:1080970357935:web:822aa6cee9c20a65bdb85a",
    measurementId: "G-1TDBP6RVMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;