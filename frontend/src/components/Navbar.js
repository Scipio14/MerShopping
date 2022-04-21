import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      Navbar
      {/*logo*/}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>
      {/*links*/}
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            Cart
            {/* Icon */}
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      {/*hamburger*/}
    </nav>
  );
};

export default Navbar;
