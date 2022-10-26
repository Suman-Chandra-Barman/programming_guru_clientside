import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const githubLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    createUser,
    updateUserProfile,
    login,
    loading,
    googleLogin,
    githubLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
