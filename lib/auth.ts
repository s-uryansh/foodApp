import { signInAnonymously } from "firebase/auth";
import { auth } from "./firebase";

export function startAnonymousAuth() {
  return signInAnonymously(auth);
}
