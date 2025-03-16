import styles from '../../scss/Testimonials.module.scss'

const Testimonials = () => {
  return (
    <div className={styles["page-inner-content"]}>
        <div className={styles["testimonials"]}>
            
            <div className={styles["testimonial"]}>
            <p>"</p>
                <p>O melhor website ecommerce responsivo moderno, irei compartilhar com o maior número de pessoas que eu conseguir</p>
                <p className={styles["rate"]}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p>Kauê Gomes</p>
            </div>
            
            <div className={styles["testimonial"]}>
            <p>"</p>
                <p>O melhor website ecommerce responsivo moderno, irei compartilhar com o maior número de pessoas que eu conseguir</p>
                <p className={styles["rate"]}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p>Kauê Gomes</p>
            </div>
            
            <div className={styles["testimonial"]}>
            <p>"</p>
                <p>O melhor website ecommerce responsivo moderno, irei compartilhar com o maior número de pessoas que eu conseguir</p>
                <p className={styles["rate"]}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <p>Kauê Gomes</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
