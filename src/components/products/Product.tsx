import React from 'react';
import { ProductType } from '../../types/types'; 
import { Link } from 'react-router-dom';
import { FaMoneyBill,FaCartShopping } from 'react-icons/fa6';
import styles from '../../scss/Products.module.scss';


const Product: React.FC<ProductType> = ({ id, name, price, image, rating }) => {
  return (
    <div className={styles["product"]}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={styles["rating"]}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className={styles["price"]}><span>R$</span> {price.toFixed(2)}</p>
      <div className={styles["buttons"]}>
        <Link to="/products/123/checkout" className={styles["btn-icon"]}>
        <span>Comprar Agora</span>
        <FaMoneyBill/>
        </Link>
        <button className={`${styles["btn-icon"]} ${styles["add-to-cart"]}`}>
          <span>Adicionar ao carrinho</span>
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};

export default Product;