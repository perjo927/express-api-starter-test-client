import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { ProvideAuth } from "./hooks/useAuth.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ErrorBoundary>
    <ProvideAuth>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideAuth>
  </ErrorBoundary>,
  document.getElementById("root")
);
