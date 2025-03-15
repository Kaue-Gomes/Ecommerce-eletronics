import { useEffect, useState } from 'react';
import styles from '../../scss/Products.module.scss';
import ProductsList from './ProductsList';
import { ProductType } from '../../types/types';

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect chamado");
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar os produtos");
        }
        const data = await response.json();
        console.log("Dados carregados:", data);

        if (isMounted && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`${styles["page-inner-content"]} ${styles["product-list"]}`}>
      <div className={styles["section-title"]}>
        <h3>Produtos Selecionados</h3>
        <div className={styles.underline}></div>
      </div>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className={styles["main-content"]}>
          <ProductsList products={products} />
        </div>
      )}
    </div>
  );
};

export default Products;