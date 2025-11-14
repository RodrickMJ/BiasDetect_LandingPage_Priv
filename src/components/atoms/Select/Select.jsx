import styles from './Select.module.css'

export default function Select({ label, children, ...props }) {
    return (
        <div className={styles.group}>
            <label className={styles.label}>{label}</label>
            <select className={styles.select} {...props}>
                {children}
            </select>
        </div>
    )
}