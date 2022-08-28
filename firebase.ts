// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1f9ncfxmIrUqOultUkYDMqy6p42Uhw4I",
  authDomain: "full-netflix-clone-186aa.firebaseapp.com",
  projectId: "full-netflix-clone-186aa",
  storageBucket: "full-netflix-clone-186aa.appspot.com",
  messagingSenderId: "321293182751",
  appId: "1:321293182751:web:7e5ca63bfd5f3d6954f22a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
