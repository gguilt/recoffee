import React from "react";
import coffeeImage from "../../assets/coffee1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Recoffee</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={coffeeImage} alt="Coffee" />
      </div>
    </React.Fragment>
  );
};

export default Header;
