import AudienceCard from '../../molecules/AudienceCard/AudienceCard'
import styles from './Audience.module.css'

const audience = [
    {
        icon: 'layers',
        title: 'Investigadores y Analistas',
        arrow: '→ Dashboard con visualizaciones de tendencias de sesgos',
        text: 'Análisis de grandes volúmenes de texto para estudios de polarización y manipulación discursiva.'
    },
    {
        icon: 'alert',
        title: 'Educadores y Estudiantes',
        arrow: '→ Desarrollo de habilidades de pensamiento crítico',
        text: 'Herramienta pedagógica para enseñar y aprender sobre falacias lógicas y sesgos cognitivos.'
    },
    {
        icon: 'smile',
        title: 'Ciudadanos Conscientes',
        arrow: '→ Extensión de navegador para verificación en tiempo real',
        text: 'Protección contra desinformación y manipulación en redes sociales y noticias digitales.'
    }
]

export default function Audience() {
    return (
        <section className={styles.section} id="PARAQUIÉN">
            <div className={styles.container}>
                <h2 className={styles.title}>Público Objetivo de BiasDetect</h2>
                <div className={styles.grid}>
                    {audience.map((a, i) => (
                        <AudienceCard key={i} {...a} />
                    ))}
                </div>
            </div>
        </section>
    )
}