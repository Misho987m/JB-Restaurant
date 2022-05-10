import Header from "../UI/Header";

import classes from "./HomeScreen.module.css";

export default function HomePage() {
  return (
    <div className={classes.wrap}>
      <Header />
      <p>
        Welcome to <span>JB Restaurant</span>
      </p>
    </div>
  );
}
