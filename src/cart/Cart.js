import Modal from "../UI/Modal";
import { useContext } from "react";
import { contextItem } from "../store/Contextstore";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const { showCart,list, setShowCart,setList,removeItem } = useContext(contextItem);



  const handlePopUp = () => {
    setShowCart(false);
  };
  const cartItem = (
    <ul className="cart-items">
      {list.map((item) => (
        <CartItem
          key={item?.id}
          candyName={item?.candyName}
          candyDescription={item?.candyDescription}
          candyPrice={item?.candyPrice}
          amount={item?.amount}
          removeItem={() => removeItem(item.id)}
          setList={() => setList(item)}
        />
      ))}
    </ul>
  );

  return (
    showCart && (
      <Modal>
        {cartItem}
        <div className="total">
          <span>Total price</span>
          <span>$</span>
        </div>
        <div className="actions">
          <button className="button_clo" onClick={handlePopUp}>
            Close
          </button>
          <button className="button_ord">Order</button>
        </div>
      </Modal>
    )
  );
};

export default Cart;
