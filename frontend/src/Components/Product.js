import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product_info">
        <p className="info_name">{name}</p>
        <p className="info_description">{description.substring(0, 100)}...</p>
        <p className="price">$ {price}</p>

        <Link to={`/product/${productId}`} className="info_bttn">
          <button> View</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
