import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cart/cartSlice";
import { toast } from 'react-toastify'; 



const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    if (cartItems.length === 0) {
      toast.success(`"${product.title}" Супер! Ваш товар додано до кошика!`);
    }
    dispatch(addToCart(product));
    
  };


  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} style={{ width: '100px' }} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">{product.price} $</p>
      <button className="add-btn" onClick={handleAddToCart}>Додати в кошик</button>
    </div>
  );
};
export default ProductCard;
