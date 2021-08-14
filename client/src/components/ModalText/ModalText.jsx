import React from "react";
import { TextField } from "@material-ui/core";
import classes from "./ModalText.module.scss";

const ModalText = ({ label, payload, setPayload, isMultiLine = false, defaultVal, isBlank, isDisabled = false }) => {
  // return isMultiLine ? <TextField multiline rows={5} className={classes.root} id="standard-basic" label={label} defaultValue={defaultVal} /> : <TextField className={classes.root} id="standard-basic" label={label} defaultValue={defaultVal} />;

  const handleChange = (e) => {
    switch (label) {
      case "Company Name":
        setPayload({ ...payload, name: e.target.value });
        break;
      case "Position":
        setPayload({ ...payload, position: e.target.value });
        break;
      case "Min Salary":
        setPayload({ ...payload, minSalary: e.target.value });
        break;
      case "Max Salary":
        setPayload({ ...payload, maxSalary: e.target.value });
        break;
      case "Memo":
        setPayload({ ...payload, memo: e.target.value });
        break;
      default:
        break;
    }
  };

  return isMultiLine ? <TextField multiline rows={5} className={classes.root} label={label} defaultValue={isBlank ? "" : defaultVal} onChange={(e) => handleChange(e)} /> : <TextField className={`${classes.root} ${(label === "Max Salary" || label === "Min Salary") && classes.salary}`} label={label} defaultValue={isBlank ? "" : defaultVal} onChange={(e) => handleChange(e)} disabled={isDisabled} />;
};

export default ModalText;
