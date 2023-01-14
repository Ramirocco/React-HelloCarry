// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8xZulwoWaIm57gxO-0Jqn6nYrkdkJawA",
  authDomain: "hydra-ecommerce.firebaseapp.com",
  projectId: "hydra-ecommerce",
  storageBucket: "hydra-ecommerce.appspot.com",
  messagingSenderId: "859454166815",
  appId: "1:859454166815:web:901fa9bd888f9a358a422a",
  measurementId: "G-682PZJPPNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)