import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlfzat120-eoaDY4uEv1cmbqFRsPMEk1Y",
  authDomain: "vue-3-2024-b8a09.firebaseapp.com",
  projectId: "vue-3-2024-b8a09",
  storageBucket: "vue-3-2024-b8a09.appspot.com",
  messagingSenderId: "412121415322",
  appId: "1:412121415322:web:79930361bc4fc6d0c8e923",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
