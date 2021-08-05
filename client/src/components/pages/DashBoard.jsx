import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Header, SideBar, Info, GoBack, Modal } from "../index";
import { IsGuestContext } from "../../App";
import classes from "./DashBoard.module.scss";
import { auth } from "../../firebase/firebase.util";
import { guest } from "../../guestData";
import Loading from "../Loading/Loading";

const DashBoard = () => {
  const [userInfo, setUserInfo] = useState(guest);
  // const [isGuest, setIsGuest] = useState(true);
  const [isGuest, setIsGuest] = useContext(IsGuestContext);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalBlank, setIsModalBlank] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    setIsGuest(false);
  };

  useEffect(() => {
    // !history.location.state && setIsGuest(false);

    auth.onAuthStateChanged((user) => {
      if (user && isGuest) {
        setIsGuest(false);
        const userObj = {
          email: user.email,
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
        };

        // axios.post("http://localhost:8080/user", userObj).then((res) => {
        axios.post("/user", userObj).then((res) => {
          setUserInfo(res.data);
          setIsLoading(false);
        });
      }
      if (!isGuest && !user) history.push("/");
    });
  }, [isGuest, userInfo]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={classes.root}>
      <Header user={userInfo} setUser={setUserInfo} />
      <div className={classes.contents}>
        <SideBar companies={userInfo.companies} setIsOpen={setIsOpen} setIsModalBlank={setIsModalBlank} />
        <Info setIsOpen={setIsOpen} setIsModalBlank={setIsModalBlank} user={userInfo} setUser={setUserInfo} />
        {isGuest && <GoBack />}
        {/* <h1 onClick={() => signOut()}>SIGN OUT</h1> */}
        {/* <h1 onClick={() => setIsOpen(true)}>Let's MODAL</h1> */}
      </div>
      <Modal isBlank={isModalBlank} isOpen={isOpen} setIsOpen={setIsOpen} user={userInfo} setUser={setUserInfo} />
    </div>
  );
};

export default DashBoard;
