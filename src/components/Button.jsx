import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({ callback, text }) => {
  const handleClick = () => {
    callback();
  };

  return (
    <>
      <button onClick={handleClick}>
        <span>{text}</span>
      </button>
    </>
  );
};

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
