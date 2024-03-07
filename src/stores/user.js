import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebaseConfig";
import router from "../routes/router";

export const useUserStore = defineStore("userStore", () => {
  const userData = ref(null);
  const loadingUser = ref(false);
  const loadingSession = ref(false);

  const registerUser = async (email, password) => {
    loadingUser.value = true;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      userData.value = { email: user.email, uid: user.uid };
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      loadingUser.value = false;
    }
  };

  const loginUser = async (email, password) => {
    loadingUser.value = true;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      userData.value = { email: user.email, uid: user.uid };
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      loadingUser.value = false;
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      userData.value = null;
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            userData.value = { email: user.email, uid: user.uid };
          } else {
            userData.value = null;
          }
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );

      return unsubscribe;
    });
  };

  return {
    userData,
    registerUser,
    loginUser,
    logoutUser,
    loadingUser,
    currentUser,
    loadingSession,
  };
});
