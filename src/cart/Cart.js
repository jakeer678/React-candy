import Modal from "../UI/Modal";
import { useContext } from "react";
import { contextItem } from "../store/Contextstore";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const { showCart,list, setShowCart,addItems,removeItem } = useContext(contextItem);

console.log(list, "jakeersasasasasas")

const total = list.reduce((acc,cur)=>{
  return acc+cur.candyPrice
},0)

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
          addItems={() => addItems(item)}
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
          <span>${total}</span>
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
