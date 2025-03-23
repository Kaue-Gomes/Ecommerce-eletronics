import React from "react";
import SidebarCart from "../components/SidebarCart/SidebarCart";
import Products from "../components/products/Products";
import ExclusiveSection from "../components/ExclusiveSection/ExclusiveSection";
import Testimonials from "../components/Testimonial/Testimonials";
import Header from "../components/Header/Header";
import { CartItem } from "../types/types"; // Importe CartItem

// Definir as props esperadas
interface HomepageProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebarCart: boolean;
  selectProducts: CartItem[];
  setSelectProducts: React.Dispatch<React.SetStateAction<CartItem[]>>; // Adiciona setSelectProducts
  addProductToCart: (id: number) => void;
}

const Homepage: React.FC<HomepageProps> = ({
  setShowSidebarCart,
  showSidebarCart,
  selectProducts,
  setSelectProducts, // Desestrutura setSelectProducts
  addProductToCart,
}) => {
  return (
    <div>
      <Header />
      <SidebarCart
        selectProducts={selectProducts}
        showSidebarCart={showSidebarCart}
        setShowSidebarCart={setShowSidebarCart}
        setSelectProducts={setSelectProducts} // Passa setSelectProducts para SidebarCart
      />
      <Products addProductToCart={addProductToCart} />
      <ExclusiveSection />
      <Testimonials />
    </div>
  );
};

export default Homepage;