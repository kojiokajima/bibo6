import React from "react";
import classes from "./InfoItemText.module.scss";

const InfoItemText = ({ info }) => {
  return (
    <>
      {typeof info === "string" ? (
        <div className={classes.root}>{info}</div>
      ) : (
        <div className={classes.root}>
          {info.maxSalary ? (
            <>
              $ {info && (+info.minSalary).toLocaleString()} ~ {info && (+info.maxSalary).toLocaleString()} {info && info.unit}
            </>
          ) : (
            <>
              $ {info && (+info.minSalary).toLocaleString()} {info && info.unit}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default InfoItemText;
