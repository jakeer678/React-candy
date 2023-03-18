import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>Candy Items</h1>
        <HeaderCartButton />
      </header>
     
    </Fragment>
  );
};

export default Header;