/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../../client/utils/firevase.config";
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   RecaptchaVerifier,
   signInWithEmailAndPassword,
   signInWithPhoneNumber,
   signInWithPopup,
   signOut,
   updateProfile,
   User,
   UserProfile,
   ConfirmationResult,
} from "firebase/auth";

// ✅ টাইপ ডেফিনিশন
type AuthContextType = {
   user: User | null;
   loading: boolean;
   createUser: (email: string, password: string) => Promise<any>;
   signIn: (email: string, password: string) => Promise<any>;
   googleLogin: () => Promise<any>;
   updateUser: (updatedData: UserProfile) => Promise<void>;
   logOut: () => Promise<void>;
   setLoading: (loading: boolean) => void;
   updatedUser: (profileinfo: UserProfile) => Promise<void>;
   setupRecaptcha: (phone: string) => Promise<ConfirmationResult>;
   verifyOtp: (confirmation: ConfirmationResult, code: string) => Promise<any>;
};

// ✅ কনটেক্সট তৈরি
export const AuthContext = createContext<AuthContextType | null>(null);

const googleProvider = new GoogleAuthProvider();

// ✅ Provider Component
function AuthProvider({ children }: { children: ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const [loading, setLoading] = useState<boolean>(true);

   // 🔐 Phone Authentication: reCAPTCHA setup
   const setupRecaptcha = async (phone: string): Promise<ConfirmationResult> => {
      setLoading(true);
      const recaptchaId = "recaptcha-container";

      if ((window as any).recaptchaVerifier) {
         (window as any).recaptchaVerifier.clear();
      }

      (window as any).recaptchaVerifier = new RecaptchaVerifier(
         recaptchaId,
         {
            size: "invisible",
            callback: () => {
               console.log("reCAPTCHA solved");
            },
         },
         auth
      );

      const appVerifier = (window as any).recaptchaVerifier;
      return signInWithPhoneNumber(auth, phone, appVerifier);
   };



   const verifyOtp = (confirmation: ConfirmationResult, code: string) => {
      setLoading(true);
      return confirmation.confirm(code);
   };


   const createUser = (email: string, password: string) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };


   const signIn = (email: string, password: string) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };


   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };


   const updateUser = (updatedData: UserProfile) => {
      if (!auth.currentUser) return Promise.reject("No user");
      return updateProfile(auth.currentUser, updatedData);
   };

   const updatedUser = (profileinfo: UserProfile) => {
      if (!auth.currentUser) return Promise.reject("No user");
      return updateProfile(auth.currentUser, profileinfo);
   };

   // 🔓 Logout
   const logOut = () => {
      setLoading(true);
      return signOut(auth)
         .then(() => {
            setUser(null);
            setLoading(false);
         })
         .catch(() => setLoading(false));
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   // ✅ Context value
   const authInfo: AuthContextType = {
      user,
      loading,
      createUser,
      signIn,
      googleLogin,
      updateUser,
      logOut,
      setLoading,
      updatedUser,
      setupRecaptcha,
      verifyOtp,
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {/* 👇 invisible recaptcha container */}
         <div id="recaptcha-container" />
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;
