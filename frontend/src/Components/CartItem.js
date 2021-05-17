import "./CartItem.css";
import { Link } from "react-router-dom";
const CartItem = ({ item, removeItem, qtyChangeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src={item.imageURl} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem_name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem_price">${item.price}</p>
      <select
        className="cartitem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem_deletebtn"
        onClick={() => removeItem(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
