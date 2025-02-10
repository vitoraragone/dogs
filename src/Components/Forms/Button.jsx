import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
