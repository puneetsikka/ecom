import "../staticfiles/navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <>
        <nav className="navbar">
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="navbar-left">
                <h1>Maviq Software</h1>
            </div>
            </Link>
            <div className="navbar-right">
              <Link to='/ShoppingCart' style={{ textDecoration: 'none', color: 'black' }}>
                <ShoppingCartIcon />
                </Link>
            </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;