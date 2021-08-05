import React, { useState, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import DashBoard from "./components/pages/DashBoard";
import "./reset.css";

export const CompanyContext = createContext([{}, () => {}]);
export const IsGuestContext = createContext(true, () => {});

export const initialCompany = {
  name: "",
  position: "",
  platforms: [""],
  questions: [""],
  requiredSkills: [""],
  preferedSkills: [""],
  minSalary: 0,
  maxSalary: 0,
  salaryUnit: "",
  status: "",
  memo: "",
  isStared: true,
};

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

function App() {
  const [company, setCompany] = useState(initialCompany);
  const [isGuest, setIsGuest] = useState(true);

  return (
    <IsGuestContext.Provider value={[isGuest, setIsGuest]}>
      <CompanyContext.Provider value={[company, setCompany]}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={DashBoard} />
          {/* <Route path="/auth/callback" component={Authcallback} /> */}
          <Route component={PageNotFound} />
        </Switch>
      </CompanyContext.Provider>
    </IsGuestContext.Provider>
  );
}

export default App;
