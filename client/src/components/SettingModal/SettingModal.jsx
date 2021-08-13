import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogActions, Button } from "@material-ui/core";
import classes from "./SettingModal.module.scss";
import SettingModalGroup from "../SettingModalGroup/SettingModalGroup";

const SettingModal = ({ isOpen, setIsOpen, user, setUser }) => {
  const [skills, setSkills] = useState(user.skills);
  const [platforms, setPlatforms] = useState(user.platforms);
  const [compSkills, setCompSkills] = useState(user.skills);
  const [compPlatforms, setCompPlatforms] = useState(user.platforms);

  const handleClick = async () => {
    const payloadSkills = skills.filter((skill) => skill !== "");
    const payloadPlatforms = platforms.filter((platform) => platform !== "");
    await axios.post("/update-list", { email: user.email, skills: payloadSkills, platforms: payloadPlatforms });
    setUser({ ...user, skills: payloadSkills, platforms: payloadPlatforms });
    setIsOpen(false);
  };
  return (
    <Dialog className={classes.root} open={isOpen} onClose={() => setIsOpen(false)} maxWidth={false}>
      <DialogContent className={classes.content}>
        <SettingModalGroup compItems={compSkills} setCompItems={setCompSkills} title={"Skills"} items={skills} setItems={setSkills} placeholder={"New Skill"} />
        <SettingModalGroup compItems={compPlatforms} setCompItems={setCompPlatforms} title={"Platforms"} items={platforms} setItems={setPlatforms} placeholder={"New Platform"} />
      </DialogContent>
      <DialogActions className={classes.buttonArea}>
        <Button className={classes.saveButton} onClick={handleClick}>
          SAVE
        </Button>
        <Button className={classes.cancelButton} onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingModal;
