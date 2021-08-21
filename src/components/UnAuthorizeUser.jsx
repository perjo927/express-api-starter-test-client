import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button.jsx";

export const UnAuthorizeUser = () => {
  const auth = useAuth();
  const history = useHistory();

  const handleAuthorizedChange = () => {
    auth.signout(() => history.replace("/signin"));
  };

  return <Button callback={handleAuthorizedChange} text={"Sign Out"} />;
};

export default UnAuthorizeUser;
