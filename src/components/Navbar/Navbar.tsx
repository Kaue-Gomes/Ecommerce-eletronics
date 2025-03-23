import React from "react";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import Navigation from "./Navigation";
import styles from "../../scss/Navbar.module.scss";
import { useState } from "react";
import { CartItem } from "../../types/types"; // Importe o tipo CartItem

interface NavbarProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  selectProducts: CartItem[]; // Usa o tipo CartItem[]
}

const Navbar: React.FC<NavbarProps> = ({ setShowSidebarCart, selectProducts }) => {
  const [show, setShow] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles["inner-content"]}>
        <h1 className={styles.logo}>
          ELETRO<span>STORE</span>
        </h1>
        <nav className={`${styles["nav-menu"]} ${show ? styles.show : ""}`}>
          <ul>
            <Navigation />
          </ul>
        </nav>
        <div className={styles["navs-icon-container"]}>
          <div className={styles["search-input-container"]}>
            <input
              placeholder="Procurar"
              type="search"
              className={showSearchInput ? styles.show : ""}
            />
            <div
              className={styles["search-icon"]}
              onClick={() => setShowSearchInput(!showSearchInput)}
            >
              <FaSearch />
            </div>
          </div>
          <button
            className={styles["shopping-cart"]}
            onClick={() => setShowSidebarCart(true)}
          >
            <FaShoppingCart />
            <div className={styles["products-count"]}>{selectProducts.length}</div>
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