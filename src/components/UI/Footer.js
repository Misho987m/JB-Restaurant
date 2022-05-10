import React from "react";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.center}>
      <div className={classes.divider_separator}></div>
      <p className={classes.narrow}>JANEZ BRATOVŽ JB RESTAURANT ©2020</p>
      <p>This site takes inspiration from JB's new book.</p>
      <p>Privacy Policy</p>
      <p>Website by - BEPET</p>
    </div>
  );
}
