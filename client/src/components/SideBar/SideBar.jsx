import React, { useState, useEffect } from "react";
import SideBarGroup from "../SideBarGroup/SideBarGroup";
import classes from "./SideBar.module.scss";

const SideBar = ({ companies, setIsOpen, setIsModalBlank, setIsDrawerOpen }) => {
  const [notApplied, setNotApplied] = useState([]);
  const [applied, setApplied] = useState([]);
  const [inProcess, setInProcess] = useState([]);
  const [maybeFailed, setMaybeFailed] = useState([]);
  const [failed, setFailed] = useState([]);
  const [succeeded, setSucceeded] = useState([]);

  const openBlankModal = () => {
    setIsModalBlank(true);
    setIsOpen(true);
  };

  useEffect(() => {
    const getFilteredItem = (items, status) => {
      return items.filter((item) => item.status === status);
    };
    setNotApplied(getFilteredItem(companies, "Not Applied"));
    setApplied(getFilteredItem(companies, "Applied"));
    setInProcess(getFilteredItem(companies, "In Process"));
    setMaybeFailed(getFilteredItem(companies, "Maybe Failed"));
    setFailed(getFilteredItem(companies, "Failed"));
    setSucceeded(getFilteredItem(companies, "Succeeded"));
  }, [companies, setIsOpen, companies.length]);

  return (
    <div className={classes.root}>
      <div className={classes.addCompany} onClick={openBlankModal}>
        + Add
      </div>
      <ul className={classes.list}>
        <SideBarGroup status={"Not Applied"} items={notApplied} setIsDrawerOpen={setIsDrawerOpen} />
        <SideBarGroup status={"Applied"} items={applied} setIsDrawerOpen={setIsDrawerOpen} />
        <SideBarGroup status={"In Process"} items={inProcess} setIsDrawerOpen={setIsDrawerOpen} />
        <SideBarGroup status={"Maybe Failed"} items={maybeFailed} setIsDrawerOpen={setIsDrawerOpen} />
        <SideBarGroup status={"Failed"} items={failed} setIsDrawerOpen={setIsDrawerOpen} />
        <SideBarGroup status={"Succeeded"} items={succeeded} setIsDrawerOpen={setIsDrawerOpen} />
      </ul>
    </div>
  );
};

export default SideBar;
