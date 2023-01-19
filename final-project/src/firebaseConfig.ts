import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlAgrKHoo4wnqKaQ-YfNIm3SuyowH702I",
  authDomain: "gc-pratice.firebaseapp.com",
  projectId: "gc-pratice",
  storageBucket: "gc-pratice.appspot.com",
  messagingSenderId: "435197613",
  appId: "1:435197613:web:680ba438170ad6dafa1824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
}

export function signOut(): void {
    auth.signOut();
}