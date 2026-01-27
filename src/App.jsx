import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from './features/cart/cartSlice';
import ProductList from './pages/ProductList.jsx';
import CartPage from './pages/CartPage.jsx';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setSearchQuery, selectSearchQuery } from './features/products/productSlice.js';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);



  return (
    <div className="app-container">
      <nav className='navigation' style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px' }}>
        <Link to="/">Магазин</Link>
        <Link to="/cart">Кошик ({totalItems})</Link>
      </nav>

      <input className='search-bar'
        type="text"
         placeholder="Пошук товарів..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />

      <ToastContainer position="bottom-right" autoClose={2000} />


      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <footer style={{ textAlign: 'center', marginTop: '50px', display: 'block', padding: '20px', borderTop: '1px solid #ccc' }}>
        <p>© 2026 Мій Курсовий Проект</p>
      </footer>
    </div>
  );
}

export default App;