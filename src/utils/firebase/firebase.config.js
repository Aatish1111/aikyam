import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-firebase-auth-2411c.firebaseapp.com",
  projectId: "react-firebase-auth-2411c",
  storageBucket: "react-firebase-auth-2411c.appspot.com",
  messagingSenderId: "843945831644",
  appId: "1:843945831644:web:2c80fb8f879cf5cf2f5819",
  measurementId: "G-WM12CG7VT9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  return await signInWithPopup(auth, googleProvider);
};



