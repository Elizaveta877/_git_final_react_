import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectCartItems } from './features/cart/cartSlice';
import { setSearchQuery, selectSearchQuery } from './features/products/productsSlice'; 
import ProductList from './pages/ProductList.jsx';
import CartPage from './pages/CartPage.jsx';
import HomePage from './pages/HomePage.jsx'; 
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
    
      <div className='top-header'>
        <div className='top-container'>
          <div className='menu-links'>
            <Link to='/'>Головна</Link>
            <Link to='/products'>Каталог</Link> 
            <Link to='/about'>Про нас</Link>
            <Link to='/contact'>Контакти</Link>
          </div>
          <div className='top-auth'>
            <span>UA | EN</span>
          </div>
        </div>
      </div>


      <nav className='navigation'>
        <Link to="/cart" className="cart-link">Кошик ({totalItems})</Link>
      </nav>

      <ToastContainer position="bottom-right" autoClose={2000} />

      <Routes>
      
        <Route path="/" element={<HomePage />} /> 
  
        <Route path="/products" element={<ProductList />} /> 
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;