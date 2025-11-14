import Button from '../../atoms/Button/Button'
import NavLink from '../../molecules/NavLink/NavLink'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>BiasDetect</a>
                <nav>
                    <ul className={styles.nav}>
                        <li><NavLink to="#BENEFICIOS">Acerca De</NavLink></li>
                        <li><NavLink to="#FUNCIONA">Funcionalidad</NavLink></li>
                        <li><NavLink to="#PARAQUIÉN">Dirección</NavLink></li>
                        <li><NavLink to="#FOOTER">Contáctanos</NavLink></li>
                    </ul>
                </nav>
                <Button variant="primary">Acceso Beta</Button>
            </div>
        </header>
    )
}