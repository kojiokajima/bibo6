import React, { useContext } from "react";
import InfoInitial from "../InfoInitial/InfoInitial";
import InfoTitle from "../InfoTitle/InfoTitle";
import InfoItems from "../InfoItems/InfoItems";
import InfoItem from "../InfoItem/InfoItem";
import { CompanyContext } from "../../App";
import classes from "./Info.module.scss";

const Info = ({ setIsOpen, setIsModalBlank, user, setUser }) => {
  const [company] = useContext(CompanyContext);

  return company.name ? (
    <div className={classes.root}>
      <InfoTitle name={company.name} setIsOpen={setIsOpen} setIsModalBlank={setIsModalBlank} user={user} setUser={setUser} />
      <InfoItems>
        <InfoItem type={"tag"} label={"Applied on"} info={company.platforms} />
        <InfoItem type={"text"} label={"Position"} info={company.position} />
        <InfoItem type={"tag"} label={"Required Skills"} info={company.requiredSkills} />
        <InfoItem type={"tag"} label={"Prefered Skills"} info={company.preferedSkills} />
        <InfoItem type={"text"} label={"Salary"} info={{ salary: company.salary, unit: company.salaryUnit }} />
        <InfoItem type={"list"} label={"Questions"} info={company.questions} />
        <InfoItem type={"text"} label={"Memo"} info={company.memo} />
      </InfoItems>
    </div>
  ) : (
    <InfoInitial />
  );
};

export default Info;
