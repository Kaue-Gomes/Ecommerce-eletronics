import { Link } from 'react-router-dom'; // Removi o BrowserRouter da importação
import styles from '../../scss/Header.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import components from '../../assets/components.png';

const Header = () => {
  return (
    <header>
      <div className={styles["inner-content"]}>
        <div className={styles["Left-side"]}>
        <h2>Transforme seu Trabalho com Estilo</h2>
        <p>
            Sucesso não se mede pela grandeza, mas pela consistência. O trabalho árduo leva à excelência, e a grandeza é apenas uma consequência natural.
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