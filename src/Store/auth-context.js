import React, { useState ,useEffect} from "react";

const AuthContext = React.createContext({
  isLoggedin: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  useEffect(() => {
    const LoggedinStatus = localStorage.getItem("loggedinstatus");
    if (LoggedinStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    localStorage.setItem("loggedinstatus", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedinstatus");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedin: IsLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
