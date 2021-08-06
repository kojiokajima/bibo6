import React, { useState } from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import SideBar from "../SideBar/SideBar";
import classes from "./SideBarDrawer.module.scss";

const SideBarDrawer = ({ userInfo, setIsOpen, setIsModalBlank }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isDrawerOpen) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsDrawerOpen(isDrawerOpen);
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.anchor}> */}
      <Menu className={classes.anchor} onClick={toggleDrawer(true)} />
      {/* </div> */}
      <SwipeableDrawer
        // anchor={anchor}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SideBar
          companies={userInfo.companies}
          setIsOpen={setIsOpen}
          setIsModalBlank={setIsModalBlank}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </SwipeableDrawer>
    </div>
  );
};

export default SideBarDrawer;
