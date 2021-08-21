import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AppBar.css";

export const AppBar = ({ tabs, onSelectedTab }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <nav id="app-bar" className={isNavOpen ? "open" : "closed"}>
      <ul>
        {tabs.map(({ name, key }, i) => (
          <li
            key={key}
            to={key}
            onClick={() => {
              setIsNavOpen(false);
              setSelectedTab(i);
              onSelectedTab(key);
            }}
            className={selectedTab === i ? "selected" : ""}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

AppBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  onSelectedTab: PropTypes.func.isRequired,
};

export default AppBar;
