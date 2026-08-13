import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "../utils/Firebase_RTDB";

export const loginWithEmailPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

export const registerWithEmailPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user;
};

export const loginWithGoogle = async (): Promise<User> => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });

  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};
