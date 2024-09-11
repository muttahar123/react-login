import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
   const [loading, setLoading] = useState(true);
  // Handle user state changes
  function onAuthChanged(user) {
    if (user) {
        setUser({isLogin:true,...user.userInfo});
    }else{
        setUser({isLogin:false,userInfo:{} });

    }
    // setUser(user);
  setLoading(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
        { loading? (
            <div className="w-full h-96 flex justify-center items-center">
                <Spinner />
            </div> ):(
        
      children)}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
