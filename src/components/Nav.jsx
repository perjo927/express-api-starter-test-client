import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Nav.css";
import UnAuthorizeUser from "./UnAuthorizeUser.jsx";

export const Nav = ({ menu }) => {
  const auth = useAuth();
  const history = useHistory();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  return (
    <>
      <div id="menu" className={isNavOpen ? "open" : "closed"}>
        <div id="menu-close" onClick={() => setIsNavOpen(false)}>
          <span>&times;</span>
        </div>
        {menu.map(({ name, route }, i) => (
          <Link
            key={name}
            to={route}
            onClick={() => {
              setIsNavOpen(false);
              setSelectedMenuItem(i);
            }}
            className={selectedMenuItem === i ? "selected" : ""}
          >
            {name}
          </Link>
        ))}
      </div>
      <nav id="top-bar">
        <div className="toggle-section">
          {auth.user && (
            <span id="menu-open" onClick={() => setIsNavOpen(true)}>
              &#9776;
            </span>
          )}
          <h1
            onClick={() => {
              auth.user && history.push("/");
            }}
          >
            Test Client
          </h1>
        </div>
        <div className="auth"> {auth.user && <UnAuthorizeUser />} </div>
      </nav>
    </>
  );
};

Nav.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default Nav;
