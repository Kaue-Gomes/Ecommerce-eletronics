import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import styles from "../../scss/ExclusiveSection.module.scss"
import exclusive from "/images/exclusive.png"


const ExclusiveSection = () => {
  return (
    <div>
      <div className={styles["exclusive-section"]}>
        <div className={styles["page-inner-content"]}>
            <div className={styles["content"]}>
                <div className={styles["left-side"]}>
                <h2>Smart Band 4</h2>
                <p>O Mi Smart Band 4 tem uma tela AMOLED, maior que Mi Band 3 e contém uma tela completamente ajustável ao brilho</p>
                <Link className={styles["see-more-btn"]} to="/products">
                <span>Ver agora</span>
                <FaChevronRight />
                </Link>
                </div>
            <div className={styles["right-side"]}>
                <img src={exclusive} alt="Smart Band 4"/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveSection
