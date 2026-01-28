import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectCartItems } from './features/cart/cartSlice';
import { setSearchQuery, selectSearchQuery } from './features/products/productsSlice'; 
import ProductList from './pages/ProductList.jsx';
import CartPage from './pages/CartPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery); 
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <nav className='navigation' style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/">Магазин</Link>

        <div className="search-wrapper">
          <input
            className='search-bar'
            type="text"
            placeholder="Пошук книг..."
            value={query}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
          
        
        <Link to="/cart">Кошик ({totalItems})</Link>
      </nav>

      <ToastContainer position="bottom-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
export default App;