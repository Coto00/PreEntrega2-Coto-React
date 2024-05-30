import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyDuoC2Fv2WCH3v-ZazQUqoC98AK2zG_BHM",
        authDomain: "bob-s-react.firebaseapp.com",
        projectId: "bob-s-react",
        storageBucket: "bob-s-react.appspot.com",
        messagingSenderId: "174137289130",
        appId: "1:174137289130:web:1680985b590a894879a3d3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
