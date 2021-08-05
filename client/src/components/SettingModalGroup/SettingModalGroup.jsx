import React, { useState, useRef } from "react";
import { TextField } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import classes from "./SettingModalGroup.module.scss";
import SettingModalItem from "../SettingModalItem/SettingModalItem";

const SettingModalGroup = ({ compItems, setCompItems, title, items, setItems, placeholder }) => {
  const inputRef = useRef();

  const handleAdd = () => {
    setCompItems([...compItems, inputRef.current.value]);
    setItems([...items, inputRef.current.value]);
    inputRef.current.value = "";
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>
        <div className={classes.items}>
          {compItems.map((item, i) => (
            <SettingModalItem compItems={compItems} items={items} setItems={setItems} index={i} key={i} />
          ))}
        </div>
        <div className={classes.add}>
          <TextField className={classes.field} placeholder={placeholder} inputRef={inputRef} />
          <div className={classes.text} onClick={handleAdd}>
            ADD
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModalGroup;
