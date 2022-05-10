import React from "react";

import classes from "./MenuList.module.css";

export default function MenuList(props) {
  return (
    <div className={classes.wrapper}>
      <h3>{props.title}</h3>
      <div>
        <div className={classes.divider_separator}></div>
      </div>
      {props.meals.map((meal, index) => {
        return (
          <div key={index} className={classes.menu_item}>
            <p>{meal.title}</p>
            {meal.price !== "" && <p>{meal.price}</p>}
            <p> *****</p>
          </div>
        );
      })}
    </div>
  );
}
