import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogle, inverted, ...otherProps }) => (
  <button
    className={`${inverted && "inverted"} ${
      isGoogle && "google-sign-in"
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
