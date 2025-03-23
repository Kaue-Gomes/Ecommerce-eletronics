import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import SidebarCart from "./components/SidebarCart/SidebarCart";
import { ProductType, CartItem } from "./types/types";

function App() {
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [selectProducts, setSelectProducts] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) throw new Error("Erro ao buscar produtos");

        const data = await response.json();
        console.log("Dados brutos retornados:", data);

        // Verifica se os dados são um objeto com a propriedade 'products'
        const productsArray = data.products && Array.isArray(data.products) ? data.products : [];

        if (productsArray.length > 0) {
          setProducts(productsArray); // Atualiza o estado com os produtos válidos
        } else {
          console.error("Erro: Os dados retornados não contêm um array válido em 'products'.");
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false); // Finaliza o estado de loading
      }
    };

    fetchProducts();
  }, []);

  const addProductToCart = (id: number) => {
    if (loading) return console.error("Erro: Produtos ainda estão carregando.");

    const productToAdd = products.find((product) => product.id === id);
    if (!productToAdd) {
      console.error(`Produto com ID ${id} não encontrado.`);
      console.log("IDs disponíveis:", products.map((p) => p.id));
      return;
    }

    if (selectProducts.some((product) => product.id === id)) {
      alert("Este produto já está no carrinho!");
      return;
    }

    // Adiciona o produto com a propriedade 'quantity' inicializada como 1
    setSelectProducts((prev) => [
      ...prev,
      { ...productToAdd, quantity: 1 },
    ]);
    setCartTotal((prev) => prev + productToAdd.price);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar selectProducts={selectProducts} setShowSidebarCart={setShowSidebarCart} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                loading ? (
                  <p>Carregando produtos...</p>
                ) : (
                  <Homepage
                    setShowSidebarCart={setShowSidebarCart}
                    showSidebarCart={showSidebarCart}
                    selectProducts={selectProducts}
                    setSelectProducts={setSelectProducts} // Passa setSelectProducts
                    addProductToCart={addProductToCart}
                  />
                )
              }
            />
            <Route
              path="/products"
              element={loading ? <p>Carregando produtos...</p> : <ProductsPage products={products} addProductToCart={addProductToCart} />}
            />
          </Routes>
        </main>
        <Footer />

        {/* Renderização do SidebarCart */}
        <SidebarCart
          showSidebarCart={showSidebarCart}
          setShowSidebarCart={setShowSidebarCart}
          selectProducts={selectProducts}
          setSelectProducts={setSelectProducts} // Passa a função para atualizar o estado
        />
      </div>
    </BrowserRouter>
  );
}

export default App;