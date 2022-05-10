import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={classes.wrap}>
      <img
        src="https://jb-slo.com/wp-content/uploads/2019/12/Logotip-JB.svg"
        alt="Logo"
      />
      <div className={classes.flex}>
        <Link to="/reservation" className={classes.hide}>
          RESERVATION
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
