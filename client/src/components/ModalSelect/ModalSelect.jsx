import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Input } from "@material-ui/core";
import classes from "./ModalSelect.module.scss";

const ModalSelect = ({ label, payload, setPayload, isMultiSelect = true, defaultVals = [], selectOptions, isBlank }) => {
  const [selectedItems, setSelectedItems] = useState(isBlank ? [] : isMultiSelect ? [...defaultVals] : [defaultVals]);

  const handleChange = (event) => {
    setSelectedItems(event.target.value);

    switch (label) {
      case "Applied On":
        setPayload({ ...payload, platforms: [...event.target.value] });
        break;
      case "Required Skills":
        setPayload({ ...payload, requiredSkills: event.target.value });
        break;
      case "Prefered Skills":
        setPayload({ ...payload, preferedSkills: event.target.value });
        break;
      case "unit":
        setPayload({ ...payload, salaryUnit: event.target.value });
        break;
      case "Status":
        setPayload({ ...payload, status: event.target.value });
        break;
      default:
        break;
    }
  };

  // console.log("selectedItems", selectedItems);
  // console.log("selectOptions: ", selectOptions);

  return (
    <FormControl className={`${classes.root} ${!isMultiSelect && classes.monoSelect}`}>
      {/* <InputLabel id="demo-mutiple-checkbox-label" className={classes.label}> */}
      <InputLabel className={classes.label}>{label}</InputLabel>
      {isMultiSelect ? (
        // <Select labelId="demo-mutiple-checkbox-label" id="demo-mutiple-checkbox" multiple value={selectedItems} onChange={handleChange} input={<Input />} renderValue={(selected) => selected.join(", ")}>
        <Select multiple value={selectedItems} onChange={handleChange} input={<Input />} renderValue={(selected) => selected.join(", ")}>
          {/* {names.map((name) => ( */}
          {selectOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedItems.indexOf(name) > -1} />
              {/* <Checkbox checked={false} /> */}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      ) : (
        // <Select labelId="demo-mutiple-checkbox-label" id="demo-mutiple-checkbox" value={selectedItems} onChange={handleChange} input={<Input />} renderValue={(selected) => selected}>
        <Select value={selectedItems} onChange={handleChange} input={<Input />} renderValue={(selected) => selected}>
          {selectOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
};

export default ModalSelect;
