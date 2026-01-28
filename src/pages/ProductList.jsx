import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'  
import { fetchProducts } from '../features/products/productsOperations'
import { selectProducts, selectLoading, selectError, selectSearchQuery } from '../features/products/productsSlice'
import ProductCard from '../components/ProductCard'



function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const searchQuery = useSelector(selectSearchQuery)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  
   return (
    <div className="app-container">
      <header>
        <h1>Наш інтернет-магазин</h1>
      </header>
      
      {loading && <div className='loader'>Завантаження товарів...</div>}
      {error && <div className='error'>Виникла помилка: {error}</div>}
      
      <main className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      
        {filteredProducts.length === 0 && !loading && (
          <p>Товари не знайдені за вашим запитом.</p>
        )}
        </main>
      </div>

  );
};
export default ProductList;