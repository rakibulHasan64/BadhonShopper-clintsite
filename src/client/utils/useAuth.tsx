import { AuthContext } from "@/context/AuthProvid/AuthProvider";
import { useContext } from "react";


function useAuth() {
   const auth = useContext(AuthContext);
   return auth;
}

export default useAuth;
