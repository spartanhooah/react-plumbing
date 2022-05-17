import { memo } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// doesn't work as you might expect because
// the onClick prop gets recreated each time App is re-run
export default memo(Button);
