import React from "react";
import ReactLoading from "react-loading";
import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    // <ReactLoading classNem={classes.root} type={"SpinningBubbles"} color={"#000"} />
    <div className={classes.root}>Loading...</div>
  );
};

export default Loading;
