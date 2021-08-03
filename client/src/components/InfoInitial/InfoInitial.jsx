import React from "react";
import classes from "./InfoInitial.module.scss";

const InfoInitial = ({ setIsOpen, setIsModalBlank }) => {
  const handleClick = () => {
    setIsModalBlank(true);
    setIsOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.text} onClick={handleClick}>
        Click to add your application info
      </div>
    </div>
  );
};

export default InfoInitial;
