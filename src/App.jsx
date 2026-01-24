import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from './features/cart/cartSlice';
import ProductList from './pages/ProductList.jsx';
import CartPage from './pages/CartPage.jsx';
import './App.css';

function App() {
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <nav className='navigation' style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px' }}>
        <Link to="/">Магазин</Link>
        <Link to="/cart">Кошик ({totalItems})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <footer style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>© 2026 Мій Курсовий Проект</p>
      </footer>
    </div>
  );
}

export default App;