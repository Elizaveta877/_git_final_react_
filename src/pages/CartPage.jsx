import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal, removeFromCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal); 

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
                    <p>{item.price} $ Кількість: {item.quantity}</p>
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
          
          <h3 style={{ marginTop: '20px' }}>Загальна сума: {total.toFixed(2)} $</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;