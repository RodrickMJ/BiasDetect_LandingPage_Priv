import Icon from '../../atoms/Icon/Icon'
import styles from './BenefitCard.module.css'

export default function BenefitCard({ icon, title, arrow, text }) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <Icon name={icon} />
            </div>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.arrow}>{arrow}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}