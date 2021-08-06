import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Hidden,
} from "@material-ui/core";
import ModalText from "../ModalText/ModalText";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalList from "../ModalList/ModalList";
import { CompanyContext, IsGuestContext } from "../../App";
import classes from "./Modal.module.scss";

const Modal = ({ isBlank, isOpen, setIsOpen, user, setUser }) => {
  const [company, setCompany] = useContext(CompanyContext);
  const [isGuest] = useContext(IsGuestContext);
  const [payload, setPayload] = useState({ ...company });
  const [isRangeChecked, setIsRangeChecked] = useState(false);
  const formRef = useRef();
  const checkboxRef = useRef();
  const originalName = company.name;

  const handleClick = async () => {
    let newCompanies = [];
    if (isBlank) {
      newCompanies = [...user.companies, payload];
    } else {
      newCompanies = user.companies.map((item, i) => (item.name === originalName ? payload : item));
    }
    setUser({ ...user, companies: [...newCompanies] });
    setCompany(payload);

    if (isGuest) {
      console.log("Hi GUEST, why are you seeing console?");
    } else {
      console.log("HI USER, why are you seeing console?");
      const res = await axios.post("/update-company", { email: user.email, companies: newCompanies });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    setPayload(company);
  }, [company]);

  return (
    // <Dialog className={classes.root} open={isOpen} onClose={() => setIsOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <Dialog className={classes.root} open={isOpen} onClose={() => setIsOpen(false)} maxWidth={false}>
      <DialogContent className={classes.content}>
        <form action="" className={classes.form} ref={formRef}>
          <ModalText
            label={"Company Name"}
            payload={payload}
            setPayload={setPayload}
            defaultVal={company.name}
            isBlank={isBlank}
          />
          <ModalSelect
            label={"Status"}
            payload={payload}
            setPayload={setPayload}
            isMultiSelect={false}
            defaultVals={company.status}
            selectOptions={["Not Applied", "Applied", "In Process", "Failed", "Succeeded"]}
            isBlank={isBlank}
          />
          <ModalSelect
            label={"Applied On"}
            payload={payload}
            setPayload={setPayload}
            defaultVals={company.platforms}
            selectOptions={user.platforms}
            isBlank={isBlank}
          />
          <ModalText
            label={"Position"}
            payload={payload}
            setPayload={setPayload}
            defaultVal={company.position}
            isBlank={isBlank}
          />
          <ModalSelect
            label={"Required Skills"}
            payload={payload}
            setPayload={setPayload}
            defaultVals={company.requiredSkills}
            selectOptions={user.skills}
            isBlank={isBlank}
          />
          <ModalSelect
            label={"Prefered Skills"}
            payload={payload}
            setPayload={setPayload}
            defaultVals={company.preferedSkills}
            selectOptions={user.skills}
            isBlank={isBlank}
          />
          <div className={classes.salary}>
            <Hidden smUp>
              <InputLabel className={classes.label}>Salary</InputLabel>
            </Hidden>
            <ModalText
              label={"Min Salary"}
              payload={payload}
              setPayload={setPayload}
              defaultVal={company.minSalary}
              isBlank={isBlank}
            />
            <Hidden xsDown>
              <span className={classes.wave}>~</span>
            </Hidden>
            <ModalText
              label={"Max Salary"}
              payload={payload}
              setPayload={setPayload}
              defaultVal={company.maxSalary}
              isBlank={isBlank}
              isDisabled={isRangeChecked}
            />
            <ModalSelect
              label={"unit"}
              payload={payload}
              setPayload={setPayload}
              isMultiSelect={false}
              defaultVals={company.salaryUnit}
              selectOptions={["/ year", "/ month", "/ hour"]}
              isBlank={isBlank}
            />
            {isBlank ? (
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    inputRef={checkboxRef}
                    size={"small"}
                    onChange={() => setIsRangeChecked(!checkboxRef.current.checked)}
                  />
                }
                label="Has range?"
              />
            ) : null}
          </div>
          <ModalList label={"Interview Questions"} payload={payload} setPayload={setPayload} isBlank={isBlank} />
          <ModalText
            label={"Memo"}
            payload={payload}
            setPayload={setPayload}
            isMultiLine={true}
            defaultVal={company.memo}
            isBlank={isBlank}
          />
        </form>
      </DialogContent>
      <DialogActions className={classes.buttonArea}>
        <Button className={classes.saveButton} onClick={handleClick}>
          {isBlank ? "SAVE" : "UPDATE"}
        </Button>
        <Button className={classes.cancelButton} onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
