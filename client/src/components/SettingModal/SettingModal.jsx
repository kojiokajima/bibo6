import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogActions, Button } from "@material-ui/core";
import classes from "./SettingModal.module.scss";
import SettingModalGroup from "../SettingModalGroup/SettingModalGroup";

const SettingModal = ({ isOpen, setIsOpen, user, setUser }) => {
  const [skills, setSkills] = useState(user.skills);
  const [platforms, setPlatforms] = useState(user.platforms);
  const [compSkills, setCompSkills] = useState(user.skills);
  const [compPlatforms, setCompPlatforms] = useState(user.platforms);

  console.log("compPlatforms: ", compPlatforms);
  console.log("user.platforms: ", user.platforms);

  const handleClick = async () => {
    const payloadSkills = skills.filter((skill) => skill !== "");
    const payloadPlatforms = platforms.filter((platform) => platform !== "");
    console.log("payload: ", { email: user.email, skills: payloadSkills, platforms: payloadPlatforms });
    axios.post("http://localhost:8080/update-list", { email: user.email, skills: payloadSkills, platforms: payloadPlatforms });
    setUser({ ...user, skills: payloadSkills, platforms: payloadPlatforms });
    // setUser({
    //   email: data.email,
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   photoUrl: data.photoUrl,
    //   phoneNumber: data.phoneNumber,
    //   platforms: data.platForms,
    //   skills: data.skills,
    //   companies: data.companies,
    // });
    setIsOpen(false);
  };
  return (
    <Dialog className={classes.root} open={isOpen} onClose={() => setIsOpen(false)} maxWidth={false}>
      <DialogContent className={classes.content}>
        {/* <SettingModalGroup title={"Skills"} items={user.skills} /> */}
        {/* <SettingModalGroup title={"Skills"} items={skills} setItems={setSkills} /> */}
        <SettingModalGroup compItems={compSkills} setCompItems={setCompSkills} title={"Skills"} items={skills} setItems={setSkills} placeholder={"New Skill"} />
        <SettingModalGroup compItems={compPlatforms} setCompItems={setCompPlatforms} title={"Platforms"} items={platforms} setItems={setPlatforms} placeholder={"New Platform"} />
      </DialogContent>
      <DialogActions className={classes.buttonArea}>
        <Button onClick={handleClick}>SAVE</Button>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingModal;
