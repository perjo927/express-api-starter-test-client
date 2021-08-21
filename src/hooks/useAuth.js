import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const authContext = createContext();

// Expose the auth context so we can use the useAuth hook to get it
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

ProvideAuth.propTypes = {
  children: PropTypes.any,
};

// This will be provided when using the useAuth hook
const useProvideAuth = () => {
  // Mocked authorization for demo purposes
  const userObject = {
    id: 42,
    name: "Foo",
    getIdToken: () => Promise.resolve("123456"),
  };
  const isSignedIn = sessionStorage.getItem("signedin");

  const [user, setUser] = useState(isSignedIn && userObject);

  const signin = (cb) => {
    setUser(userObject);
    sessionStorage.setItem("signedin", 1);
    cb();
  };

  const signout = (cb) => {
    setUser(null);
    sessionStorage.removeItem("signedin");
    cb();
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
};
