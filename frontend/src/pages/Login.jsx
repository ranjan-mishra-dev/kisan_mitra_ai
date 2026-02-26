import React, { useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

import api from "../api/axios";

const provider = new GoogleAuthProvider();
//created once when file loads, reused across render

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, logout } = useContext(AuthContext);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      const firebaseIdToken = await firebaseUser.getIdToken();

      // console.log(firebaseIdToken);

      const response = await api.post("/api/auth/google", {
        token: firebaseIdToken,
      });

      console.log("User data u seeing", response.data.user);
      const {name, avatar } = response.data.user;
      setUser({name, avatar });

      console.log("Avatar from login", avatar);

      navigate("/");
    } catch (error) {
      console.log("Google login error", error.response?.data || error.message);
      alert("Login failed");
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
