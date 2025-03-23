import React from "react";
import { ProductType } from "../../types/types";
import styles from "../../scss/Products.module.scss";

interface ProductProps {
  product: ProductType;
  addProductToCart: (id: number) => void;
}

const ProductItem: React.FC<ProductProps> = ({ product, addProductToCart }) => {
  return (
    <div className={styles.product}>
      {/* Imagem do Produto */}
      <img
        src={product.image}
        alt={`Imagem de ${product.name}`}
        className={styles.image}
      />

      {/* Nome do Produto */}
      <h3 className={styles.name}>{product.name}</h3>

      {/* Preço do Produto */}
      <p className={styles.price}>
        Preço: <span>{product.price?.toFixed(2) || "0.00"} R$</span>
      </p>

      {/* Avaliação do Produto (opcional) */}
      {product.rating !== undefined && (
        <p className={styles.rating}>
          Avaliação: {product.rating} ★
        </p>
      )}

      {/* Botões */}
      <div className={styles.buttons}>
        {/* Botão "Adicionar ao Carrinho" */}
        <button
          className={`${styles["btn-icon"]} ${styles["add-to-cart"]}`}
          onClick={() => addProductToCart(product.id)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
