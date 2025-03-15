import React from 'react';
import { ProductType } from '../../types/types'; 
import { Link } from 'react-router-dom';
import { FaMoneyBill,FaCartShopping } from 'react-icons/fa6';



const Product: React.FC<ProductType> = ({ id, name, price, image, rating }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">R$ {price.toFixed(2)}</p>
      <div className="buttons">
        <Link to="/products/123/checkout" className="btn-icon">
        <span>Comprar Agora</span>
        <FaMoneyBill/>
        </Link>
        <button className="btn-icon add-to-cart"><span>Adicionar ao carrinho</span><FaCartShopping /></button>
      </div>
    </div>
  );
};

export default Product;