import BenefitCard from '../../molecules/BenefitCard/BenefitCard'
import styles from './Benefits.module.css'

const benefits = [
    {
        icon: 'home',
        title: 'Protección Contra Manipulación',
        arrow: '→ Identifica técnicas de persuasión ocultas en tiempo real',
        text: 'Detección de 47 tipos de sesgos y falacias lógicas mediante modelos Transformer avanzados.'
    },
    {
        icon: 'smile',
        title: 'Análisis de Polarización',
        arrow: '→ Mide el grado de sesgo emocional en discursos',
        text: 'PLN contextual para revelar técnicas de persuasión y omisiones estratégicas en contenido digital.'
    },
    {
        icon: 'clock',
        title: 'Educación en Pensamiento Crítico',
        arrow: '→ Explicaciones pedagógicas generadas por IA',
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