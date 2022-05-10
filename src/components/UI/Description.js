import React from "react";
import Button from "./Button";

import classes from "./Description.module.css";

export default function Description(props) {
  const headerClasses = props.narrow
    ? classes.narrow + " " + classes[`align-${props.align}`]
    : classes[`align-${props.align}`];

  return (
    <section className={classes.description}>
      <div>
        <h4 className={headerClasses}>{props.header}</h4>
        <div className={classes[`divider-${props.align}`]}>
          <div className={classes.divider_separator}></div>
        </div>
        {props.desc.map((p, index) => (
          <p key={index}>{p}</p>
        ))}

        <div className={classes[`align-${props.align}`]}>
          {props.show && <Button>{props.btnText}</Button>}
        </div>
      </div>
      <img className={classes.image} src={props.img} alt={props.header} />
    </section>
  );
}
