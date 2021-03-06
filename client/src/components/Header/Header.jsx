import React, { useState, useContext, useRef } from "react";
import { Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import SettingModal from "../SettingModal/SettingModal";
import { IsGuestContext } from "../../App";
import { auth } from "../../firebase/firebase.util";
import classes from "./Header.module.scss";
import WhiteLogo from "../../assets/images/whiteLogo.png";

const Header = ({ user, setUser }) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isGuest] = useContext(IsGuestContext);
  const anchorRef = useRef();

  const togglePopper = () => {
    setIsPopperOpen(!isPopperOpen);
  };

  const handleSetting = () => {
    setIsSettingModalOpen(true);
    setIsPopperOpen(false);
  };
  const handleLogout = () => {
    auth.signOut();
    setIsPopperOpen(false);
  };

  const handleListKeyDown = () => {};

  return (
    <div className={classes.root}>
      <img className={classes.left} src={WhiteLogo} alt="" />
      <div className={`${classes.right} ${!isGuest ? classes.user : ""}`} onClick={!isGuest ? togglePopper : undefined}>
        Hello {isGuest ? "Guest" : user.firstName}
        {!isGuest && <Settings className={classes.settinIcon} ref={anchorRef} />}
      </div>
      <Popper open={isPopperOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
            <Paper>
              <ClickAwayListener onClickAway={() => setIsPopperOpen(false)}>
                <MenuList onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleSetting}>Setting</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <SettingModal isOpen={isSettingModalOpen} setIsOpen={setIsSettingModalOpen} user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
