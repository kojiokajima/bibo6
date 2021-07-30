import React, { useState, useEffect, useContext } from "react";
import { TextField } from "@material-ui/core";
import classes from "./ModalList.module.scss";
import { CompanyContext } from "../../App";

const ModalList = ({ label, payload, setPayload, isBlank }) => {
  const [company] = useContext(CompanyContext);
  const [questions, setQuestions] = useState(company.questions);

  const handleChange = (e, i) => {
    // e.preventDefault();
    setQuestions(
      questions.map((item, index) => {
        if (i === index) {
          return e.target.value;
        } else {
          return item;
        }
      })
    );

    setPayload({
      ...payload,
      // questions: payload.questions.map((item, index) => {
      questions: questions.map((item, index) => {
        if (i === index) {
          return e.target.value;
        } else {
          return item;
        }
      }),
    });
  };

  const deleteField = (i) => {
    // console.log(
    //   questions.filter((item, index) => {
    //     return i !== index;
    //   })
    // );

    const newQuestions = questions.filter((item, index) => i !== index);

    // setQuestions(
    //   questions.filter((item, index) => {
    //     return i !== index;
    //   })
    // );
    setQuestions([...newQuestions]);
    setPayload({ ...payload, questions: [...newQuestions] });
  };

  useEffect(() => {
    if (isBlank) setQuestions([""]);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.fields}>
        {label}
        {questions.map((item, i) => (
          // {payload.questions.map((item, i) => (
          <div className={classes.fieldLine} key={i}>
            {/* <TextField className={classes.field} id="standard-basic" onChange={(e) => handleChange(e, i)} value={questions[i]} /> */}
            {isBlank ? <TextField className={classes.field} id="standard-basic" onChange={(e) => handleChange(e, i)} value={item} /> : <TextField className={classes.field} id="standard-basic" onChange={(e) => handleChange(e, i)} value={item} />}
            {/* <TextField className={classes.field} onChange={(e) => handleChange(e, i)} defaultValue={isBlank ? "" : questions[i]} /> */}
            {/* <TextField className={classes.field} onChange={(e) => handleChange(e, i)} defaultValue={isBlank ? "" : item} /> */}
            <span className={classes.deleteButton} onClick={() => deleteField(i)}>
              DELETE
            </span>
          </div>
        ))}
      </div>
      <div className={classes.addButton} onClick={() => setQuestions([...questions, ""])}>
        {/* <div className={classes.addButton} onClick={() => setPayload({ ...payload, questions: [...payload.questions, ""] })}> */}
        ADD
      </div>
    </div>
  );
};

export default ModalList;
