// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPThg90MskR4JPTa8zbBrwUYkRgvAcAZM",
  authDomain: "the-hotel-booking-auth.firebaseapp.com",
  projectId: "the-hotel-booking-auth",
  storageBucket: "the-hotel-booking-auth.appspot.com",
  messagingSenderId: "481928827123",
  appId: "1:481928827123:web:f6b396ade940b861146786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;