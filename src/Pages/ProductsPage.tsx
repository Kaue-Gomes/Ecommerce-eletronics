import React from "react";
import { ProductType } from "../types/types";
import ProductItem from "../components/products/Product";


interface ProductsPageProps {
  products: ProductType[];
  addProductToCart: (id: number) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products, addProductToCart }) => {
  // Se os produtos estiverem vazios, exiba uma mensagem de erro
  if (products.length === 0) {
    return <p>Nenhum produto disponível. Verifique sua conexão ou tente novamente mais tarde.</p>;
  }

  return (
    <div>
      <h1>Página de Produtos</h1>
      <div className="products-list">
        {products.map((product) => (
        <ProductItem
        key={product.id}
        product={product} // Agora o produto é passado corretamente
        addProductToCart={addProductToCart}
      />
      
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;