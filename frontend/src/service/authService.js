import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase";

import api from "../api/axios";

const provider = new GoogleAuthProvider();
//created once when file loads, reused across render

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const firebaseUser = result.user;

    const firebaseIdToken = await firebaseUser.getIdToken();

    const response = await api.post("/api/auth/google", {
      token: firebaseIdToken,
    });

    console.log("Resopnse auth service", response)

    return response.data.user;

  } catch (error) {
    alert("Login failed");
    return error.response?.data || error.message;
  }
};
