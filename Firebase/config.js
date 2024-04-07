// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbpZF7AX0ygz5SG4ybQhsMaI0nOcCGgDM",
  authDomain: "react-native-shapeup-app.firebaseapp.com",
  projectId: "react-native-shapeup-app",
  storageBucket: "react-native-shapeup-app.appspot.com",
  messagingSenderId: "215102344575",
  appId: "1:215102344575:web:5f90d6e2e55dc2ab805e4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
