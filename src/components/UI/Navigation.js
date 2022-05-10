import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import classes from "./Navigation.module.css";

export default function Navigation(props) {
  const [isActive, setIsActive] = useState(false);

  const showMenuHandler = () => {
    setIsActive(true);
  };

  const hideMenuHandler = () => {
    setIsActive(false);
  };

  const nav_classes = isActive
    ? `${classes.navigation} ${classes.active}`
    : `${classes.navigation}`;

  return (
    <Fragment>
      {!isActive && (
        <div onClick={showMenuHandler}>
          <i
            aria-hidden="true"
            className={`fas fa-bars ${classes.menuBtn}`}
          ></i>
        </div>
      )}

      <nav className={nav_classes}>
        <div>
          <p>EN / SI</p>
          <div onClick={hideMenuHandler}>
            <i
              aria-hidden="true"
              className={`fas fa-times ${classes.icon}`}
            ></i>
          </div>
        </div>
        <div className={classes.ul}>
          <Link to="/">Home</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/restaurant">Restaurant</Link>
          <Link to="/literature">Literature</Link>
          <Link to="/giftcards">Gift Cards</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <a href="https://www.facebook.com/restavracijaJB/">
            <i
              className={`fa fa-facebook-f ${classes["icon-small"]} ${classes.left}`}
            ></i>
          </a>
          <a href="https://www.instagram.com/jbrestavracija/">
            <i className={`fa fa-instagram ${classes["icon-small"]}`}></i>
          </a>
        </div>
      </nav>
    </Fragment>
  );
}
