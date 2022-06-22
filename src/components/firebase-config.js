import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc , getDocs, doc, setDoc } from "firebase/firestore";
import { getStorage,ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqKLLx_k3W7gu06WkZc0AN8LL_7Jqpod4",
  authDomain: "myapptio-716d6.firebaseapp.com",
  databaseURL: "https://myapptio-716d6.firebaseio.com",
  projectId: "myapptio-716d6",
  storageBucket: "myapptio-716d6.appspot.com",
  messagingSenderId: "744359280296",
  appId: "1:744359280296:web:c51b330ff6be603b308c9d",
  measurementId: "G-TH0F7VWBGY"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);