import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cardActions";
import { CircularProgress } from "@material-ui/core";
const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);
  const addtoCardHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };
  return (
    <div className="productscreen">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="production_left">
            <div className="left_image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price : <span>${product.price}</span>
              </p>
              <p>
                Status :{" "}
                <span>
                  In Stock
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty :
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addtoCardHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
