import BenefitCard from '../../molecules/BenefitCard/BenefitCard'
import styles from './Benefits.module.css'

const benefits = [
    {
        icon: 'home',
        title: 'Protección Contra Manipulación',
        arrow: '→ Identifica técnicas de persuasión ocultas en tiempo real',
        text: 'Detección de tipos de sesgos y falacias lógicas'
    },
    {
        icon: 'clock',
        title: 'Educación en Pensamiento Crítico',
        arrow: '→ Explicaciones generadas por IA',
        text: 'Cada análisis incluye explicaciones claras sobre por qué un contenido contiene sesgos específicos.'
    }
]

export default function Benefits() {
    return (
        <section className={styles.benefits} id="BENEFICIOS">
            <div className={styles.container}>
                <h2 className={styles.title}>Solución Integral para el Análisis de Sesgos</h2>
                <div className={styles.grid}>
                    {benefits.map((b, i) => (
                        <BenefitCard key={i} {...b} />
                    ))}
                </div>
            </div>
        </section>
    )
}