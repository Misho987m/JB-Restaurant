import React from "react";
import Button from "../UI/Button";

import classes from "./SampleMenu.module.css";

export default function SampleMenu() {
  return (
    <div className={classes.outline}>
      <h3>Menu</h3>
      <div>
        <div className={classes.divider_separator}></div>
      </div>
      <div className={classes.flex}>
        <div className={`${classes.wrapper} ${classes.hide}`}>
          <h3>6 Course Meal</h3>

          <div className={classes.menu_item}>
            <p>Couvert</p>
            <p> ********</p>
          </div>
          <div className={classes.menu_item}>
            <p>Tuna</p>
            <p>********</p>
          </div>
          <div className={classes.menu_item}>
            <p>Beef fillet</p>
            <p>********</p>
          </div>
          <div className={classes.menu_item}>
            <p>Scampi</p>
            <p>********</p>
          </div>
          <div>...</div>
        </div>
        <div className={classes.wrapper}>
          <h3>9 Course Meal</h3>

          <div className={classes.menu_item}>
            <p>Couvert</p>
            <p> ********</p>
          </div>
          <div className={classes.menu_item}>
            <p>Tuna</p>
            <p>********</p>
          </div>
          <div className={classes.menu_item}>
            <p>Beef fillet</p>
            <p>********</p>
          </div>
          <div className={classes.menu_item}>
            <p>Scampi</p>
            <p>********</p>
          </div>
          <div>...</div>
        </div>
      </div>
      <Button>View Menu</Button>
    </div>
  );
}
