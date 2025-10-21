// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTlojsGQpCtVFjhSvy6fjX_Aj34RmT0TQ",
    authDomain: "dragon-news-ba5fc.firebaseapp.com",
    projectId: "dragon-news-ba5fc",
    storageBucket: "dragon-news-ba5fc.firebasestorage.app",
    messagingSenderId: "273468325985",
    appId: "1:273468325985:web:404bd94672a6b92d452a20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);