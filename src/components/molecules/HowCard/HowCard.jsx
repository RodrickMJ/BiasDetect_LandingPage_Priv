import Icon from '../../atoms/Icon/Icon'
import styles from './HowCard.module.css'

export default function HowCard({ icon, title, arrow }) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <Icon name={icon} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.arrow}>{arrow}</p>
            </div>
        </div>
    )
}