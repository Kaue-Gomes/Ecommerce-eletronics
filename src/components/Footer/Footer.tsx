import styles from '../../scss/Footer.module.scss'
import { Link } from 'react-router-dom'

import appstore from '/images/app-store.png'
import googleplay from '/images/play-store.png'

const Footer = () => {
  return (
    <footer>
      <div className={`${styles["page-inner-content"]} ${styles["content"]}`}>
        <div className={styles["download-options"]}>
          <p>Instale nosso Aplicativo!</p>
          <p>Instale nosso Aplicativo para Android e iOS!</p>
          <div>
            <img src={appstore} alt="App Store Download" />
            <img src={googleplay} alt="Google Play Store Download" />
          </div>
        </div>
        <div className={styles["logo-footer"]}>
          <h1 className={styles.logo}>
            ELETRO<span>STORE</span>
          </h1>
          <p>Nosso objetivo é conectar você com os melhores produtos do mercado</p>
        </div>
        <div className={styles["links"]}>
          <h3>Links úteis</h3>
          <ul>
            <li><Link to="/">Cupons</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Políticas</Link></li>
            <li><Link to="/">Torne-se afiliado</Link></li>
          </ul>
        </div>
      </div>

      <hr /> 
      <div className={styles["copyright"]}>
      <p>
        &#169; EletroStore - Kaue Gomes - Todos os direitos Reservados
      </p>
      </div>
    </footer>
  )
}

export default Footer
