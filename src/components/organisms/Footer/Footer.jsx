import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    const legalLinks = [
        { to: '/aviso-de-privacidad', text: 'Aviso de Privacidad' },
        { to: '/terminos-de-uso', text: 'Términos de Uso' },
        { to: '/etica-ia', text: 'Ética en IA' },
        { to: '/licencias', text: 'Licencias' },
    ]

    const investigacionLinks = [
        { to: '#', text: 'Publicaciones' },
        { to: '#', text: 'Metodología' },
        { to: '#', text: 'Dataset de Sesgos' },
        { to: '#', text: 'Colaboraciones' },
    ]

    const desarrolloLinks = [
        { to: '#', text: 'Documentación API' },
        { to: '#', text: 'GitHub' },
        { to: '#', text: 'Contribuir' },
        { to: '#', text: 'Change' },
    ]

    const contactoLinks = [
        { to: '#', text: 'Investigadores' },
        { to: '#', text: 'Soporte' },
        { to: '#', text: 'Colaboraciones' },
        { to: 'mailto:investigacion@biasdetect.ai', text: 'investigacion@biasdetect.ai' },
    ]

    const columns = [
        { title: 'Investigación', links: investigacionLinks },
        { title: 'Desarrollo', links: desarrolloLinks },
        { title: 'Legal', links: legalLinks },
        { title: 'Contacto', links: contactoLinks },
    ]

    return (
        <footer className={styles.footer} id="FOOTER">
            <div className={styles.left}>
                <h3 className={styles.logo}>BiasDetect</h3>
                <p className={styles.desc}>
                    Plataforma de análisis de sesgos cognitivos mediante inteligencia artificial.
                    Proyecto de investigación ética para combatir la manipulación y polarización en el discurso digital.
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.bottom}>
                    {columns.map((col, i) => (
                        <div key={i} className={styles.column}>
                            <h4 className={styles.title}>{col.title}</h4>
                            <ul className={styles.links}>
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        {link.to.startsWith('mailto:') || link.to.startsWith('http') ? (
                                            <a href={link.to} target="_blank" rel="noopener noreferrer">
                                                {link.text}
                                            </a>
                                        ) : (
                                            <Link to={link.to}>{link.text}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.copyright}>
                <p>© 2025 BiasDetect - Plataforma de Investigación en Análisis de Sesgos Cognitivos. Proyecto académico con fines educativos.</p>
            </div>
        </footer>
    )
}