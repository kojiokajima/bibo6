import React, { useState } from "react";
import { Remove, Add } from "@material-ui/icons";
import classes from "./SettingModalItem.module.scss";

const SettingModalItem = ({ compItems, items, setItems, index }) => {
  const [isDeleteSelected, setIsDeleteSelected] = useState(false);
  const handleDeleteSelect = () => {
    setIsDeleteSelected(true);
    // setItems(items.filter((el) => el !== compItems[index]));
    setItems(items.map((el) => (el !== compItems[index] ? el : "")));
  };
  const handleDeleteDeselect = () => {
    setIsDeleteSelected(false);
    setItems(items.map((el, i) => (i === index ? compItems[index] : el)));
  };

  return (
    <div className={`${classes.root} ${isDeleteSelected && classes.deleteSelected}`}>
      {/* {items[index]} */}
      {compItems[index]}
      {isDeleteSelected ? <Add className={`${classes.icon} ${classes.add}`} onClick={handleDeleteDeselect} /> : <Remove className={`${classes.icon} ${classes.delete} `} onClick={handleDeleteSelect} />}
    </div>
  );
};

export default SettingModalItem;
