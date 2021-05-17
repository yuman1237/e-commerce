import "./HomeScreen.css";
import Product from "../Components/Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getProducts as listitems } from "../redux/actions/productActions";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listitems());
  }, [dispatch]);
  return (
    <div className="homescreen">
      <div className="homescreen_title">
        <h2>Latest Products</h2>
      </div>
      <div className="homescreen_product">
        {loading ? (
          <h2>
            <CircularProgress disableShrink />
          </h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
