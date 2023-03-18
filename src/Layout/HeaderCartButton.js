import React, { Fragment, useContext } from "react";

import Cart from "../cart/Cart";
import CartIcon from "../cart/CartIcon";
import { contextItem } from "../store/Contextstore";
import "./HederCartButton.css";

const HeaderCartButton = () => {
  const { showCart, setShowCart } = useContext(contextItem);
  const CartCtx = useContext(contextItem);
  const handlePopUp = () => {
    setShowCart(true);
  };

  let quantity = 0;
  CartCtx.list.forEach((item) => {
    quantity = quantity + Number(item.quantity);
   console.log(quantity,"sasasasass")
  });

  return (
    <Fragment>
      {showCart && <Cart />}
      <button className="button" onClick={handlePopUp}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{quantity}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;