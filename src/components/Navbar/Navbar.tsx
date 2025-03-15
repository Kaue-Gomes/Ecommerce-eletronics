import styles from "../../scss/Navbar.module.scss";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import Navigation from "./Navigation";


const Navbar = () => {
  return (
    
    <div className={styles.nav}>
      <div className={styles["inner-content"]}>
      <h1 className={styles.logo}>
        ELETRO<span>STORE</span>
      </h1>
      <nav>
        <ul>
          <Navigation />
        </ul>
      </nav>
      <div className={styles["navs-icon-container"]}>
        <div className={styles["search-input-container"]}>
          <input placeholder="procurar" type="search" />
          <FaSearch />
        </div>
        <button className={styles["shopping-cart"]}>
          <FaShoppingCart />
          <div className={styles["products-count"]}>0</div>
        </button>
        <button className={styles["menu-button"]}>
          <FaBars />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
