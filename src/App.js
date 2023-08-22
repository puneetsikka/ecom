import './App.css';
import Navbar from './components/navbar'
import { Routes, Route} from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import {useState,useEffect} from 'react';
function App() {
  const [product,setProduct] = useState('')
  const [addedToCart,addToCart] = useState([])
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<CategoryPage setProduct={setProduct} />}/>
          <Route path='/ProductList' element={<ProductList product={product} addedToCart={addedToCart}  addToCart={addToCart} />}/>
          <Route path='/CategoryPage' element={<CategoryPage />}/>
          <Route path='/ShoppingCart' element={<ShoppingCart cartList={addedToCart}/>}/>
        </Routes>
      </>
  );
}

export default App;
