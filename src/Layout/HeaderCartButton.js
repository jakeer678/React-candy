import React, { Fragment, useContext } from "react";

import Cart from "../cart/Cart";
import CartIcon from "../cart/CartIcon";
import { contextItem } from "../store/Contextstore";
import "./HederCartButton.css";

const HeaderCartButton = () => {
  const { showCart, setShowCart, list } = useContext(contextItem);

  const handlePopUp = () => {
    setShowCart(true);
  };

  const total = list?.length;

  return (
    <Fragment>
      {showCart && <Cart />}
      <button className="button" onClick={handlePopUp}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{total}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
