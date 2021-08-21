import React from "react";
import { Redirect, useHistory } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button.jsx";

export const SignIn = () => {
  const auth = useAuth();
  const history = useHistory();

  const handleAuthorizedChange = () => {
    auth.signin(() => history.replace("/"));
  };

  return (
    <>
      {!auth.user ? (
        <Button callback={handleAuthorizedChange} text={"Sign In"} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default SignIn;
