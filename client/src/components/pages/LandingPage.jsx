import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { IsGuestContext, CompanyContext, initialCompany } from "../../App";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import Loading from "../Loading/Loading";
import classes from "./LandingPage.module.scss";
import ColouredLogo from "../../assets/images/colouredLogo.png";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGuest, setIsGuest] = useContext(IsGuestContext);
  const [company, setCompany] = useContext(CompanyContext);
  const history = useHistory();

  const signIn = () => {
    signInWithGoogle().then(() => {
      history.push("/dashboard");
    });
  };

  useEffect(() => {
    setCompany(initialCompany);
    setIsGuest(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/dashboard");
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={classes.root}>
      <img className={classes.logo} src={ColouredLogo} alt="" srcset="" />
      <div className={classes.title}>bibo6</div>
      <div className={classes.text}>Way to get closer to your new career</div>
      <div className={classes.buttonArea}>
        <div className={classes.googleSignIn} onClick={signIn}>
          Sign In with Google
        </div>
        <div className={classes.or}>or</div>
        <Link to={"/dashboard"}>
          <div className={classes.playAround}>Play Around</div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
