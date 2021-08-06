import React, { useEffect, useContext } from "react";
import SideBarItem from "../SideBarItem/SideBarItem";
import { CompanyContext } from "../../App";
import classes from "./SideBarGroup.module.scss";

const SideBarGroup = ({ status, items, setIsDrawerOpen }) => {
  const [company, setCompany] = useContext(CompanyContext);

  const setCompanyInfo = (company) => {
    setCompany(company);
  };

  const handleClick = (item) => {
    setCompanyInfo(item);
    setIsDrawerOpen(false);
  };

  return (
    <li className={classes.root}>
      <div className={classes.status}>{status}</div>
      <ul className={classes.items}>
        {items.map((item, i) => (
          <SideBarItem
            title={item.name}
            status={status}
            key={i}
            onClick={() => handleClick(item)}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        ))}
      </ul>
    </li>
  );
};

export default SideBarGroup;
