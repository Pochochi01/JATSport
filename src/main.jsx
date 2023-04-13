import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_q2nKtJcQKQ3YvNNYHXP4gHgTWbzoums",
  authDomain: "jatsport-ac9c4.firebaseapp.com",
  databaseURL: "https://jatsport-ac9c4-default-rtdb.firebaseio.com",
  projectId: "jatsport-ac9c4",
  storageBucket: "jatsport-ac9c4.appspot.com",
  messagingSenderId: "912382850102",
  appId: "1:912382850102:web:08e3c5cdcd3954bac1d497"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
