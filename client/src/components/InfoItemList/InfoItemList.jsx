import React from "react";
import classes from "./InfoItemList.module.scss";

const InfoItemList = ({ info }) => {
  return (
    <ul className={classes.root}>
      {info.map((item, i) => (
        <li className={classes.item} key={i}>
          - {item}
        </li>
      ))}
    </ul>
  );
};

export default InfoItemList;
