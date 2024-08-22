import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl2E8-R5co9eTdTC4bxFsZaJguaM7IXZw",
  authDomain: "w3d-integrative-project.firebaseapp.com",
  projectId: "w3d-integrative-project",
  storageBucket: "w3d-integrative-project.appspot.com",
  messagingSenderId: "525423187079",
  appId: "1:525423187079:web:ea49f168240735e96e1422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)