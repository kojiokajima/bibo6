import React from "react";
import { Link } from "react-router-dom";
import classes from "./GoBack.module.scss";

const GoBack = () => {
  return (
    <Link to="/" className={classes.root}>
      <div>&#8592; Go Back</div>
    </Link>
  );
};

export default GoBack;
