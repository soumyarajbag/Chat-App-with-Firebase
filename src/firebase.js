
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNhYfZh5a8qo-stLFi-fv4h-UFhAYCG8M",
  authDomain: "chat-web-app-fb9b1.firebaseapp.com",
  projectId: "chat-web-app-fb9b1",
  storageBucket: "chat-web-app-fb9b1.appspot.com",
  messagingSenderId: "1000402297707",
  appId: "1:1000402297707:web:3b528602136ec75c08622e"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage() ;
export const db = getFirestore(app);