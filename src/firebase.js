import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtE-7e6gyMsjhdpMh4yOfEykHi278qLo0",
  authDomain: "clone-65613.firebaseapp.com",
  projectId: "clone-65613",
  storageBucket: "clone-65613.appspot.com",
  messagingSenderId: "126099630014",
  appId: "1:126099630014:web:b6153aa7fb55339aaefbef",
  measurementId: "G-TBB2DCCT4G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
