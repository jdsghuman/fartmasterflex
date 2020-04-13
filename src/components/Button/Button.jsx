import React from "react";
import PropTypes from 'prop-types';
import buttonStyles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(buttonStyles);

const Button = ({
  children,
  handleClick,
  type,
  className,
  continueButton,
  primary,
  accent,
  selectedFart,
  selectedTimer
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={cx("button", className, {
        "button-primary": primary,
        "button-continue": continueButton,
        "button-accent": accent,
        "button-enabled": `${selectedFart && selectedTimer}`
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired
}

Button.defaultPropTypes = {
  type: "button"
}

export default Button;
