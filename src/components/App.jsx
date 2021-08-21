import React from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import Router from "./Router.jsx";

const menu = [{ name: "Home", route: "/" }];

export const App = () => {
  return (
    <>
      <header>
        <Nav menu={menu} />
      </header>
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
