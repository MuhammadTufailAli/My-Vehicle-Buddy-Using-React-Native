import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh0sysgUPRpMRybYLfvNCZTL5JhyRrAq4",
  authDomain: "fir-tutorial-f17d3.firebaseapp.com",
  projectId: "fir-tutorial-f17d3",
  storageBucket: "fir-tutorial-f17d3.appspot.com",
  messagingSenderId: "139176535576",
  appId: "1:139176535576:web:24fdd69f72475c9db2c56d",
  measurementId: "G-RZRBFS0W2E",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);
export const AccountRef = db.collection("Account");

export { firebase };
