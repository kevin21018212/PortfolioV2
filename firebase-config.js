// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD55aIPT9YMX_pXuUlykUqpGBQGHbuWBPE",
  authDomain: "portfolio-67502.firebaseapp.com",
  databaseURL: "https://portfolio-67502-default-rtdb.firebaseio.com",
  projectId: "portfolio-67502",
  storageBucket: "portfolio-67502.appspot.com",
  messagingSenderId: "1079616656330",
  appId: "1:1079616656330:web:9b5bc8fde2f1082be87533",
  measurementId: "G-701PFQ5NSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
