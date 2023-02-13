
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCAl7ZAU6xpwX5xzWmXUV3eGPIXig4mmLQ",
  authDomain: "mi-primer-proyecto-f6fde.firebaseapp.com",
  projectId: "mi-primer-proyecto-f6fde",
  storageBucket: "mi-primer-proyecto-f6fde.appspot.com",
  messagingSenderId: "623743547956",
  appId: "1:623743547956:web:6d07324eeae4fd27a26861",
  measurementId: "G-G2JM2SMDF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);