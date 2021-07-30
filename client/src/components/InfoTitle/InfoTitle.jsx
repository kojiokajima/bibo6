import React, { useState } from "react";
import { MoreHoriz } from "@material-ui/icons";
import classes from "./InfoTitle.module.scss";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

const InfoTitle = ({ name, setIsOpen, setIsModalBlank, user, setUser }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openFilledModal = () => {
    setIsModalBlank(false);
    setIsOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.name}>{name}</div>
      <div className={`${classes.option} ${classes.edit}`} onClick={openFilledModal}>
        Edit
      </div>
      <div className={`${classes.option} ${classes.delete}`} onClick={() => setIsDeleteModalOpen(true)}>
        Delete
      </div>
      <DeleteConfirmModal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} name={name} user={user} setUser={setUser} />
    </div>
  );
};

export default InfoTitle;
