import React from "react";
import classes from "./InfoInitial.module.scss";

const InfoInitial = ({ setIsOpen, setIsModalBlank }) => {
  const handleClick = () => {
    setIsModalBlank(true);
    setIsOpen(true);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      Click to add your application info
    </div>
  );
};

export default InfoInitial;
