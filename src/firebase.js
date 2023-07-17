
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClxaDZTMsFu3tDRdxqbbJrzZavG4EQIX4",
  authDomain: "talkie-talk-2681a.firebaseapp.com",
  projectId: "talkie-talk-2681a",
  storageBucket: "talkie-talk-2681a.appspot.com",
  messagingSenderId: "787126364788",
  appId: "1:787126364788:web:f5deaa1a30cdc1867a7f21"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage() ;
export const db = getFirestore();
