import { useEffect, useState } from 'react';
import styles from '../../scss/Products.module.scss';
import ProductsList from './ProductsList';
import { ProductType } from '../../types/types';

const Products = ({ addProductToCart }: { addProductToCart: (id: number) => void }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect chamado");

    let isMounted = true; // Variável para evitar atualizações após o componente ser desmontado

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://kaue-gomes.github.io/Ecommerce-eletronics/db.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();
        console.log("Dados brutos retornados:", data);

        // Verifica se os dados são um array ou estão dentro de um objeto
        const productsArray = Array.isArray(data) ? data : data.products;

        if (Array.isArray(productsArray)) {
          if (isMounted) {
            setProducts(productsArray); // Atualiza o estado apenas se o componente ainda estiver montado
          }
        } else {
          console.error("Erro: Os dados retornados não são um array.");
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        if (isMounted) {
          setLoading(false); // Finaliza o estado de loading
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false; // Define como falso ao desmontar o componente
    };
  }, []);

  return (
    <div className={`${styles["page-inner-content"]} ${styles["product-list"]}`}>
      {/* Título da Seção */}
      <div className={styles["section-title"]}>
        <h3>Produtos Selecionados</h3>
        <div className={styles.underline}></div>
      </div>

      {/* Exibe mensagem de carregamento ou lista de produtos */}
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className={styles["main-content"]}>
          <ProductsList products={products} addProductToCart={addProductToCart} />
        </div>
      )}
    </div>
  );
};

export default Products;