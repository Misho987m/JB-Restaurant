import classes from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={classes.wrap}>
      <img
        src="https://jb-slo.com/wp-content/uploads/2019/12/Logotip-JB.svg"
        alt="Logo"
      />

      <Navigation />
    </header>
  );
}
