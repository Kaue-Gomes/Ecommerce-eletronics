import { Link } from "react-router-dom";
import { FaXmark, FaChevronRight } from "react-icons/fa6";
import SidebarProduct from "./SidebarProduct";
import styles from "../../scss/SidebarCart.module.scss";
import { CartItem } from "../../types/types"; // Importe o tipo CartItem

interface SidebarCartProps {
  showSidebarCart: boolean;
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  selectProducts: CartItem[]; // Usa o tipo CartItem[]
  setSelectProducts: React.Dispatch<React.SetStateAction<CartItem[]>>; // Usa o tipo CartItem[]
}

const SidebarCart: React.FC<SidebarCartProps> = ({ showSidebarCart, setShowSidebarCart, selectProducts, setSelectProducts }) => {
  // Atualiza a quantidade de um produto
  const updateQuantity = (id: number, newQuantity: number) => {
    const parsedQuantity = parseInt(newQuantity.toString(), 10); // Certifica-se de que é um número
    if (isNaN(parsedQuantity) || parsedQuantity < 1) return; // Evita valores inválidos

    setSelectProducts((prev) => 
      prev.map((product) => 
        product.id === id ? { ...product, quantity: parsedQuantity } : product
      )
    );
  };

  // Remove um produto do carrinho
  const removeProduct = (id: number) => {
    setSelectProducts((prev) => prev.filter((product) => product.id !== id));
  };

 // Cálculo do total geral do carrinho
const total = selectProducts.reduce((acc, prod) => {
  const itemTotal = prod.price * prod.quantity; // Multiplica preço pela quantidade (mesmo se for 0)
  return acc + itemTotal;
}, 0);

  return (
    <aside className={`${styles["sidebar-cart"]} ${showSidebarCart ? styles["show"] : ""}`}>
      <div className={styles["top"]}>
        <h3>Seu carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)}>
          <FaXmark />
        </button>
      </div>

      <div className={styles["sidebar-products-list"]}>
        {selectProducts.length > 0 ? (
          selectProducts.map((product) => (
            <SidebarProduct
              key={product.id}
              {...product}
              updateQuantity={updateQuantity}
              removeProduct={removeProduct}
            />
          ))
        ) : (
          <i>Seu carrinho está vazio</i>
        )}
      </div>

      {selectProducts.length > 0 && (
        <div className={styles["total-container"]}>
          <b>Total:</b> {total.toFixed(2)} R$
        </div>
      )}

      {selectProducts.length > 0 && (
        <Link className={styles["btn-icon"]} to="/cart/checkout">
          <span>Ver agora</span>
          <FaChevronRight />
        </Link>
      )}
    </aside>
  );
};

export default SidebarCart;