// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmmXRt9UHV-sMCAy_5EQE3uo239ErXba4',
  authDomain: "mern-estate-78ff1.firebaseapp.com",
  projectId: "mern-estate-78ff1",
  storageBucket: "mern-estate-78ff1.appspot.com",
  messagingSenderId: "422216961781",
  appId: "1:422216961781:web:65db14f988b342646d3fbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);