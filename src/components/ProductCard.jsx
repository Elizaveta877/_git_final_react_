import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice"; 



const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} style={{ width: '100px' }} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">{product.price} $</p>
      <button className="add-btn" onClick={() => dispatch(addToCart(product))}>Додати в кошик</button>
    </div>
  );
};
export default ProductCard;
