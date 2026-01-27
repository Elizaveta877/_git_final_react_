import { useSelector, useDispatch } from "react-redux";
// Додаємо clearCart в імпорт
import { selectCartItems, selectCartTotal, removeFromCart, addToCart, clearCart } from "../features/cart/cartSlice";
import { toast } from 'react-toastify';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal); 

  const handleCheckout = () => {
    // Виправляємо назву на clearCart
    dispatch(clearCart());
    toast.info('Замовлення оформлено! Дякуємо за покупку!', {
      position: "top-center",
      icon: "🎉"
    });
  };

  return (
    <div className="cart-page" style={{ padding: '20px' }}>
      <h2>Ваш кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                gap: '20px', 
                marginBottom: '10px', 
                borderBottom: '1px solid #ccc',
                paddingBottom: '10px' 
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.price} $</p>

                    <div className="quantity-controls" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <button onClick={() => dispatch(removeFromCart(item.id))} style={{ padding: '2px 8px', cursor: 'pointer' }}>-</button>
                      <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                      <button onClick={() => dispatch(addToCart(item))} style={{ padding: '2px 8px', cursor: 'pointer' }}>+</button>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ background: '#ff4757', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Видалити 
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '20px' }}>Загальна сума: {total.toFixed(2)} $</h3>
            
          
            <button 
              onClick={handleCheckout}
              style={{ 
                padding: '15px 30px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Оформити замовлення
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;