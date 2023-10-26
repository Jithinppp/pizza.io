// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const checkUserExist = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    } else {
      return false;
    }
  });
};

// recaptcha verifier
export const createRecaptchaVerifier = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
    size: "invisible",
  });
};

// const appVerifier = window.recaptchaVerifier;

export const signIn = async (phone) => {
  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      `+91 ${phone}`,
      window.recaptchaVerifier,
    );
    window.confirmationResult = confirmationResult;
  } catch (error) {
    console.log(error);
  }
};

export const confirmOtp = async (otp) => {
  try {
    const res = await window.confirmationResult.confirm(otp);
    const user = {
      phoneNumber: res.phoneNumber,
      uid: res.uid,
      accessToken: res.accessToken,
    };
    return user;
  } catch (error) {
    console.log(error);
  }
};
