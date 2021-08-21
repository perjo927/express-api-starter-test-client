import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { SignIn } from "./SignIn.jsx";
import { useAuth } from "../hooks/useAuth";
import Index from "./Index.jsx";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signin" render={(props) => <SignIn {...props} />} />

      <PrivateRoute exact path="/">
        <Index />
      </PrivateRoute>
    </Switch>
  );
};

export default Router;
