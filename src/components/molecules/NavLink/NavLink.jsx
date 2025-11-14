import styles from './NavLink.module.css'

export default function NavLink({ to, children }) {
    return (
        <a href={to} className={styles.link}>
            {children}
        </a>
    )
}