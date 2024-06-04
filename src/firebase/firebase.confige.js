// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASofB8nnlKMqbndu3G1NOS7Q9lIq7E_TI",
  authDomain: "trabel-flight.firebaseapp.com",
  projectId: "trabel-flight",
  storageBucket: "trabel-flight.appspot.com",
  messagingSenderId: "363812792865",
  appId: "1:363812792865:web:a27d6c997cf7a72b26d160"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;