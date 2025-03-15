import styles from "../../scss/Navbar.module.scss";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import Navigation from "./Navigation";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false); 
  const [showSearchInput, setShowSearchInput] = useState(false); 

  return (
   
    <div className={styles.nav}>
      <div className={styles["inner-content"]}>
        <h1 className={styles.logo}>
          ELETRO<span>STORE</span>
        </h1>
        <nav className={`${styles.nav} ${show ? styles.show : ""}`}>
          <ul>
            <Navigation />
          </ul>
        </nav>
        <div className={styles["navs-icon-container"]}>
          <div className={styles["search-input-container"]}>
            <input
              placeholder="procurar"
              type="search"
              className={`${showSearchInput ? styles.show : ""}`} 
            />
            <div
              className={styles["search-icon"]} 
              onClick={() => setShowSearchInput(!showSearchInput)} 
            >
              <FaSearch />
            </div>
          </div>
          <button className={styles["shopping-cart"]}>
            <FaShoppingCart />
            <div className={styles["products-count"]}>0</div>
          </button>
          <button
            className={styles["menu-button"]}
            onClick={() => setShow(!show)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
   
  );
};

export default Navbar;