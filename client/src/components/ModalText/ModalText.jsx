import React from "react";
import { TextField } from "@material-ui/core";
import classes from "./ModalText.module.scss";

const ModalText = ({
  label,
  payload,
  setPayload,
  isMultiLine = false,
  defaultVal,
  isBlank,
}) => {
  // return isMultiLine ? <TextField multiline rows={5} className={classes.root} id="standard-basic" label={label} defaultValue={defaultVal} /> : <TextField className={classes.root} id="standard-basic" label={label} defaultValue={defaultVal} />;

  const handleChange = (e) => {
    switch (label) {
      case "Company Name":
        setPayload({ ...payload, name: e.target.value });
        break;
      case "Position":
        setPayload({ ...payload, position: e.target.value });
        break;
      case "Salary":
      case "Max Salary":
        setPayload({ ...payload, salary: e.target.value });
        break;
      case "Memo":
        setPayload({ ...payload, memo: e.target.value });
        break;
      default:
        break;
    }
  };

  return isMultiLine ? (
    <TextField
      multiline
      rows={5}
      className={classes.root}
      label={label}
      defaultValue={isBlank ? "" : defaultVal}
      onChange={(e) => handleChange(e)}
    />
  ) : (
    <TextField
      className={`${classes.root} ${
        (label === "Min Salary" || label === "Max Salary") && classes.salary
      }`}
      label={label}
      defaultValue={isBlank ? "" : defaultVal}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default ModalText;
