import axios from 'axios';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../staticfiles/categorypage.css'

function CategoryPage(props) {
    const [listOfCat,setListOfCat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      var url = `https://dummyjson.com/products/categories`;
      axios.get(url).then((function (res){
          setListOfCat(res.data)
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
        <ul className="category-list">
          {listOfCat.map((category, index) => (
            <Link to={{ pathname:"/ProductList",state:category}} style={{ textDecoration: 'none', color: 'black' }} onClick={()=> props.setProduct(category)} >
            <li key={index} className="category-item">
              {category}
            </li>
            </Link>
          ))}
        </ul>
      </>
    );
  }
  
  export default CategoryPage;