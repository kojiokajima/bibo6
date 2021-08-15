import React, { useContext } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import MuiAccordion from "@material-ui/core/Accordion";
// import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
// import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import { ExpandMore } from "@material-ui/icons";
import { CompanyContext } from "../../App";
import classes from "./ModalUrl.module.scss";

const ModalUrl = ({ isBlank }) => {
  const [company, setCompany] = useContext(CompanyContext);

  console.log("COMPANY: ", company);
  return (
    <div className={classes.root}>
      <Accordion square className={classes.accordion}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add URL</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {company.platforms.map((item, index) => {
            return (
              <div className={classes.platform}>
                <div className={classes.name}>{item.name}</div>
                {/* <div className={classes.url}>{item.url}</div> */}
                <TextField
                  className={classes.url}
                  placeholder={"URL"}
                  defaultValue={isBlank ? "" : item.url}
                  onChange={(e) => console.log(e)}
                />
              </div>
            );
          })}
          {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ModalUrl;
