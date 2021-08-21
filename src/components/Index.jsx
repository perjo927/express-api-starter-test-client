import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import apiService from "../services/api/index";
import { useAuth } from "../hooks/useAuth.js";
import Spinner from "./Spinner.jsx";
import "./Index.css";
import Button from "./Button.jsx";

const Status = ({ token }) => {
  const [authorizationResponse, setAuthorizationResponse] = useState(null);

  if (!token) {
    return null;
  }

  return (
    <div className="status-option">
      <p>Am I authorized?</p>
      <Button
        text={"Show my auth status"}
        callback={async () => {
          const text = await apiService.testAuth({
            accessToken: token,
          });
          setAuthorizationResponse(text);
        }}
      />
      <p>
        <b>{authorizationResponse}</b>
      </p>
    </div>
  );
};

Status.propTypes = {
  token: PropTypes.string.isRequired,
};

export const Index = () => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem("apiToken")
  );

  useEffect(() => {
    // Make sure API calls are authenticated by getting access token
    async function init() {
      setIsLoading(true);

      const { user } = auth;

      if (user && !accessToken) {
        try {
          const idToken = await user.getIdToken();
          const { accessToken: apiToken } = await apiService.authorize(idToken);
          sessionStorage.setItem("apiToken", apiToken);
          setAccessToken(apiToken);
        } catch (error) {
          console.error(error);
          setError("Something unexpected happen. Please reload and try again.");
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }
    init();

    return () => {
      sessionStorage.removeItem("apiToken");
    };
  }, [auth, accessToken]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Welcome</h2>
      <section id="status">
        <Status token={accessToken} className="status-option" />
      </section>
    </>
  );
};

export default Index;
