import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCFcZU3lO_i7fYwDAvW54Gwy0RrQAPAO08",
  authDomain: "vue-3-2024-cb1bc.firebaseapp.com",
  projectId: "vue-3-2024-cb1bc",
  storageBucket: "vue-3-2024-cb1bc.appspot.com",
  messagingSenderId: "188607558662",
  appId: "1:188607558662:web:bc8e8a51ee7477db6aff87"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
