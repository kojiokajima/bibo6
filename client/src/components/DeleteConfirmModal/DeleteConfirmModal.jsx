import React, { useContext } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogActions, Button } from "@material-ui/core";
import { IsGuestContext, CompanyContext, initialCompany } from "../../App";
import classes from "./DeleteConfirmModal.module.scss";

const DeleteConfirmModal = ({ isOpen, setIsOpen, name, user, setUser }) => {
  const [isGuest] = useContext(IsGuestContext);
  const [company, setCompany] = useContext(CompanyContext);

  const deleteRecord = async () => {
    const newCompanies = user.companies.filter((item, i) => item.name !== name);
    await axios.delete("/delete", { data: { email: user.email, companies: newCompanies } });
    setUser({ ...user, companies: [...newCompanies] });
    setCompany(initialCompany);
    setIsOpen(false);
  };
  return (
    <Dialog className={classes.root} open={isOpen} onClose={() => setIsOpen(false)} maxWidth={false}>
      <DialogContent className={classes.content}>Are you sure you want to delete this record?</DialogContent>
      <DialogActions className={classes.buttonArea}>
        <Button className={classes.deleteButton} onClick={deleteRecord}>
          Delete
        </Button>
        <Button className={classes.cancelButton} onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmModal;
