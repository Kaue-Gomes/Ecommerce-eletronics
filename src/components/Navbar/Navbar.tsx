import styles from "..scss/Navbar.module.css";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="logo">
        ElETRO<span>STORE</span>
      </h1>
      <nav>
        <ul>
          <Navigation />
        </ul>
      </nav>
      <div className="navs-icon-container">
        <div className="search-input-container">
          <input type="search" />
          <FaSearch />
        </div>
        <button className="shopping-cart">
          <FaShoppingCart />
          <div className="products-count">0</div>
        </button>
        <button className="menu-button">
          <FaBars />
        </button>
      </div>
     
    </div>
  );
};

export default Navbar;
