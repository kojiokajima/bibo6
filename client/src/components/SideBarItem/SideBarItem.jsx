import React from "react";
import classes from "./SideBarItem.module.scss";

const SideBarItem = ({ title, status, onClick }) => {
  return (
    <li className={classes.root} onClick={onClick}>
      {title}
    </li>
  );
};

export default SideBarItem;
