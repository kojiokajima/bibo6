import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogActions, Button } from "@material-ui/core";
import ModalText from "../ModalText/ModalText";
import ModalSelect from "../ModalSelect/ModalSelect";
import ModalList from "../ModalList/ModalList";
import { CompanyContext, IsGuestContext } from "../../App";
import classes from "./Modal.module.scss";

const Modal = ({ isBlank, isOpen, setIsOpen, user, setUser }) => {
  const [company, setCompany] = useContext(CompanyContext);
  const [isGuest] = useContext(IsGuestContext);
  // const [questions, setQuestions] = useState(isBlank ? [""] : [...company.questions]);
  // const [questions, setQuestions] = useState(isBlank ? [""] : ["YO", "HEY"]);
  // const [questions, setQuestions] = useState([...company.questions]);
  const [payload, setPayload] = useState({ ...company });
  const formRef = useRef();
  const originalName = company.name;

  const handleClick = async () => {
    let newCompanies = [];
    if (isBlank) {
      newCompanies = [...user.companies, payload];
      // setUser({ ...user, companies: [...newCompanies] });
    } else {
      newCompanies = user.companies.map((item, i) => (item.name === originalName ? payload : item));
      // setUser({ ...user, companies: [...newCompanies] });
    }
    setUser({ ...user, companies: [...newCompanies] });
    setCompany(payload);

    if (isGuest) {
      console.log("Hi GUEST");
      console.log(newCompanies);
    } else {
      console.log("HI USER");
      console.log(newCompanies);
      // const res = await axios.post("http://localhost:8080/update-company", { email: user.email, companies: newCompanies });
      const res = await axios.post("/update-company", { email: user.email, companies: newCompanies });
      console.log(res);
    }

    setIsOpen(false);
  };

  // console.log("payload: ", payload);
  // console.log("user: ", user);

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
            <ModalText
              label={"Salary"}
              payload={payload}
              setPayload={setPayload}
              defaultVal={company.salary}
              isBlank={isBlank}
            />
            <ModalText
              label={"Max Salary"}
              payload={payload}
              setPayload={setPayload}
              defaultVal={company.salary}
              isBlank={isBlank}
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
          </div>
          <ModalList label={"Interview Questions"} payload={payload} setPayload={setPayload} isBlank={isBlank} />
          {/* <ModalList label={"Interview Questions"} questions={[...company.questions]} setQuestions={setQuestions} isBlank={isBlank} /> */}
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
