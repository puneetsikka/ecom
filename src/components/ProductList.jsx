import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import '../staticfiles/productlist.css'
function ProductList(props) {
    const [listOfprod,setListOfProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleAddToCart = (product) => {
      props.addToCart(prevCartItems => [...prevCartItems, product])
    };
    useEffect(() => {
      var url = `https://dummyjson.com/products/category/${props.product}`;
      axios.get(url).then((function (res){
          setListOfProd(res.data.products)
          setLoading(false);
      })).catch(function (error) {
        setError(error);
        setLoading(false);
      })
    },[])
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error fetching categories: {error.message}</div>;
    }
    return (
      <>
      <div className="product-list">
      {listOfprod.map((product, index) => (
        <div key={index} className="product-item">
          <div className="product-image">
            <img src={product.images[0]} alt={product.brand} />
          </div>
          <div className="product-details">
            <h3 className="product-brand">{product.brand}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">
              ${product.price} <span className="discount">-{product.discountPercentage}%</span>
            </p>
            <p className="product-stock">{product.stock} in stock</p>
            <div className="product-rating">
              Rating: {product.rating} / 5
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
      </>
    );
  }
  
  export default ProductList;