import "./CartItem.css";

const CartItem = (props) => {
  

  return (
    <li className="cart-item">
      <div>
        <div className="item_price">
          <div>
            <div>{props.candyName}</div>
            <div>{props.candyDescription}</div>
            <span className="price">${props.candyPrice}</span>

            <span className="amount">x {props.amount}</span>
          </div>

          <div className="actions">
            <button onClick={props.removeItem}>−</button>
            <button onClick={props.setList}>+</button>
          </div> 
        </div>
      </div>
    </li>
  );
};

export default CartItem;
