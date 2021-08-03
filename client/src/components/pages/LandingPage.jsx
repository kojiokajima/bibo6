import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { IsGuestContext, CompanyContext, initialCompany } from "../../App";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import classes from "./LandingPage.module.scss";
import ColouredLogo from "../../assets/images/colouredLogo.png";

// const Loading = () => {
//   return <h2>Loading</h2>;
// };

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGuest, setIsGuest] = useContext(IsGuestContext);
  const [company, setCompany] = useContext(CompanyContext);
  const history = useHistory();

  const signIn = () => {
    signInWithGoogle().then(() => {
      console.log("INSIDE THEN");
      history.push("/dashboard");
    });
  };

  useEffect(() => {
    setCompany(initialCompany);
    setIsGuest(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        // const userInfo = {
        //   email: user.email,
        //   firstName: user.displayName.split(" ")[0],
        //   lastName: user.displayName.split(" ")[1],
        //   phoneNumber: user.phonenUmber,
        //   photoUrl: user.photoURL,
        // };
        // axios.post("http://localhost:8080/register", userInfo).then((user) => {});
        history.push("/dashboard");
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <div className={classes.root}>
      {/* <div className={classes.logo} /> */}
      {/* <div className={classes.logoContainer}> */}
      <img className={classes.logo} src={ColouredLogo} alt="" srcset="" />
      {/* </div> */}
      <div className={classes.title}>bibo6</div>
      <div className={classes.text}>Way to get closer to your new career</div>
      <div className={classes.buttonArea}>
        <div className={classes.googleSignIn} onClick={signIn}>
          Sign In with Google
        </div>
        <div className={classes.or}>or</div>
        {/* <Link to={{ pathname: "/dashboard", state: { guest: true } }}> */}
        <Link to={"/dashboard"}>
          <div className={classes.playAround}>Play Around</div>
        </Link>
      </div>
      {/* <h1 onClick={() => auth.signOut()}>SIGN OUT</h1> */}
    </div>
  );
};

export default LandingPage;
