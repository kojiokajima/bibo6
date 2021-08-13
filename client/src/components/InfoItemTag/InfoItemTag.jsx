import React from "react";
import classes from "./InfoItemTag.module.scss";

const InfoItemTag = ({ info }) => {
  const getTag = (info) => {
    switch (typeof info[0]) {
      case "string":
        return info.map((item, i) => (
          <div className={classes.tagItem} key={i}>
            {item}
          </div>
        ));
      case "object":
        const tagName = info.map((item) => item.name);
        return info.map((item, i) => (
          <div className={classes.tagItem} key={i}>
            <a className={classes.tagLink} href={item.url} rel="noreferrer" target="_blank">
              {tagName[i]}
            </a>
          </div>
        ));
      default:
        return null;
    }
  };

  return <div className={classes.root}>{getTag(info)}</div>;
};

export default InfoItemTag;
