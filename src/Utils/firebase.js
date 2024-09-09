// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBbTWwY0aKf7YqGrd_ehctzKK-sKNvyCj8",
  authDomain: "this-is-my-first-prject-ac171.firebaseapp.com",
  projectId: "this-is-my-first-prject-ac171",
  storageBucket: "this-is-my-first-prject-ac171.appspot.com",
  messagingSenderId: "951577190072",
  appId: "1:951577190072:web:6ed85ccd40b7fa08a71e4d",
  measurementId: "G-YS4RDC3XK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{
    app,
    auth,
}