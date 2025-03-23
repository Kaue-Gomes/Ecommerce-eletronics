import styles from "../../scss/SidebarCart.module.scss";
import { FaXmark } from "react-icons/fa6";

interface SidebarProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeProduct: (id: number) => void;
}

const SidebarProduct: React.FC<SidebarProductProps> = ({ id, image, name, price, quantity, updateQuantity, removeProduct }) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Permite valores vazios temporariamente enquanto o usuário digita
    if (value === "") {
      updateQuantity(id, 0); // Define temporariamente como 0 para evitar NaN
      return;
    }

    const parsedValue = parseInt(value, 10);

    // Verifica se o valor é um número válido
    if (isNaN(parsedValue)) return; // Ignora valores inválidos

    updateQuantity(id, parsedValue); // Atualiza a quantidade globalmente
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Se o campo estiver vazio ou inválido, redefine a quantidade para 1
    if (value === "" || isNaN(parseInt(value, 10))) {
      updateQuantity(id, 1); // Redefine para 1 se o campo estiver vazio ou inválido
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = (e.target as HTMLInputElement).value;

      // Se o campo estiver vazio ou inválido, redefine a quantidade para 1
      if (value === "" || isNaN(parseInt(value, 10))) {
        updateQuantity(id, 1);
      }
    }
  };

  return (
    <div className={styles["sidebar-product"]}>
      <div className={styles["left-side"]}>
        <button className={styles["remove-product-btn"]} onClick={() => removeProduct(id)}>
          <FaXmark />
        </button>

        <div className="details">
          <h4>{name}</h4>
          <p>{price.toFixed(2)} R$</p>
          <input
            type="number"
            min={0} // Altera o mínimo para 0
            value={quantity}
            onChange={handleQuantityChange}
            onBlur={handleBlur} // Adiciona o tratamento para onBlur
            onKeyDown={handleKeyDown} // Adiciona o tratamento para Enter
          />
          <p className="price-sum">
            <b>Valor Total:</b> {(quantity * price).toFixed(2)} R$
          </p>
        </div>
      </div>

      <div className={styles["right-side"]}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default SidebarProduct;