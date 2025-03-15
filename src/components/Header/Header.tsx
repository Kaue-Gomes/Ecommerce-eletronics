import { Link } from 'react-router-dom'; // Removi o BrowserRouter da importação
import styles from '../../scss/Header.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import components from '../../assets/components.png';

const Header = () => {
  return (
    <header>
      <div className={styles["inner-content"]}>
        <div className={styles["Left-side"]}>
          <h2>Dê um novo Estilo ao seu trabalho</h2>
          <p>
            Sucesso nem sempre tem a ver com grandeza. Tem a ver com consistência.
            Trabalho duro supera o sucesso. A grandeza virá.
          </p>
          <Link className={styles["see-more-btn"]} to="/products">
            <span>Ver agora</span>
            <FaChevronRight />
          </Link>
        </div>
        <div className={styles["Right-side"]}>
          <img src={components} alt="Componentes" />
        </div>
      </div>
    </header>
  );
};

export default Header;