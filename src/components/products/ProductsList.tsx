import React from "react";
import ProductItem from "./Product"; // Mudando nome da importação para evitar conflito
import { ProductType } from "../../types/types";
import styles from "../../scss/Products.module.scss";

interface ProductsListProps {
  products: ProductType[];
  addProductToCart: (id: number) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, addProductToCart }) => {
  return (
    <div className={styles["products-list"]}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addProductToCart={addProductToCart} />
      ))}
    </div>
  );
};

export default ProductsList;
