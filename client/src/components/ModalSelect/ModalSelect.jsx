import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Input } from "@material-ui/core";
import classes from "./ModalSelect.module.scss";

const ModalSelect = ({ label, payload, setPayload, isMultiSelect = true, defaultVals = [], selectOptions, isBlank }) => {
  // const [selectedItems, setSelectedItems] = useState(isBlank ? [] : isMultiSelect ? [...defaultVals] : [defaultVals]);
  const [selectedItems, setSelectedItems] = useState(
    isBlank
      ? []
      : isMultiSelect
      ? typeof defaultVals[0] === "string"
        ? [...defaultVals]
        : [...defaultVals.map((item) => item.name)]
      : [defaultVals]
  );

  console.log("SEEEE: ", defaultVals);
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

  return (
    <FormControl className={`${classes.root} ${!isMultiSelect && classes.monoSelect}`}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      {isMultiSelect ? (
        // <Select multiple value={selectedItems} onChange={handleChange} input={<Input />} renderValue={(selected) => selected.join(", ")}>
        <Select
          multiple
          value={selectedItems}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
        >
          {selectOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedItems.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      ) : (
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
