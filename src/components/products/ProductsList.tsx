import React from 'react';
import Product from './Product';
import { ProductType } from '../../types/types'; 
import styles from '../../scss/Products.module.scss';

interface ProductsListProps {
  products: ProductType[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className={styles["products-list"]}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;