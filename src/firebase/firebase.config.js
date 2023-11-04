// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC18Iy-mnlYAsR464qonPuC3G3PmZs6-SI",
  authDomain: "restaurant-manag.firebaseapp.com",
  projectId: "restaurant-manag",
  storageBucket: "restaurant-manag.appspot.com",
  messagingSenderId: "718367435810",
  appId: "1:718367435810:web:cb1aff11bffa45889d2e7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;