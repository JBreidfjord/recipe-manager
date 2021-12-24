import "firebase/firestore";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9EgIeFJIa1ld2V7eo_xMeO_Ac-UK2Ox0",
  authDomain: "recipe-manager-a058c.firebaseapp.com",
  projectId: "recipe-manager-a058c",
  storageBucket: "recipe-manager-a058c.appspot.com",
  messagingSenderId: "597742022800",
  appId: "1:597742022800:web:d11c396cbf90a1bc3e2815",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();

export { projectFirestore };
