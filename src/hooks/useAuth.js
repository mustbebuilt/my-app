import { useContext } from "react";
import AuthContext from "../store/AuthProvider";
// custom hook
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
