import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'  
import { fetchProducts } from '../features/products/productsOperations'
import { selectProducts, selectLoading, selectError } from '../features/products/productSlice'
import ProductCard from '../components/ProductCard'


function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  )
  };
export default ProductList;