import React from "react";
import clsx from "clsx";
import InfoItemTag from "../InfoItemTag/InfoItemTag";
import InfoItemText from "../InfoItemText/InfoItemText";
import InfoItemList from "../InfoItemList/InfoItemList";
import classes from "./InfoItem.module.scss";

const InfoItem = ({ type, label, info }) => {
  const getContent = (type) => {
    switch (type) {
      case "tag":
        return <InfoItemTag info={info} />;
      case "text":
        return <InfoItemText info={info} />;
      case "list":
        return <InfoItemList info={info} />;
      default:
        return null;
    }
  };

  return (
    <div className={clsx(classes.root, (label === "Memo" || label === "Questions") && classes.multiLine)}>
      <div className={classes.label}>{label}</div>
      <div className={classes.content}>{getContent(type)}</div>
    </div>
  );
};

export default InfoItem;
