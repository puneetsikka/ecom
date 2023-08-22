import '../staticfiles/shoppingcart.css'
function ShoppingCart(props) {
  const cartItems = props.cartList
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
    return (
      <>
      <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-image">
              <img src={item.images[0]} alt={item.brand} />
            </div>
            <div className="item-details">
              <h3 className="item-brand">{item.brand}</h3>
              <p className="item-price">
                ${item.price} <span className="item-discount">-{item.discountPercentage}%</span>
              </p>
              <p className="item-stock">In stock: {item.stock}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="total-price">Total: ${calculateTotalPrice().toFixed(2)}</p>
        <button className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
      </>
    );
  }
  
  export default ShoppingCart;