import React from "react"
import classes from "./InfoItems.module.scss"

const InfoItems = ({ children }) => {
  return <div className={classes.root}>{children}</div>
}

export default InfoItems
