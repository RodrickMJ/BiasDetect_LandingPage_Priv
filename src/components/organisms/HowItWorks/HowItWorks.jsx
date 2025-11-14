import HowCard from '../../molecules/HowCard/HowCard'
import styles from './HowItWorks.module.css'

const steps = [
    { icon: 'smile', title: 'Minería de Datos y Procesamiento', arrow: '→ Pipeline de ingesta continuo de corpus textuales masivos' },
    { icon: 'cube', title: 'Modelado con Transformers y LLMs', arrow: '→ Clasificación multi-etiqueta de sesgos específicos' },
    { icon: 'alert', title: 'Análisis de Sentimiento Contextual', arrow: '→ Medición del grado de polarización emocional' },
    { icon: 'clock', title: 'Generación de Explicaciones', arrow: '→ Funcionalidad pedagógica con LLMs' },
    { icon: 'layers', title: 'API RESTful Multiplataforma', arrow: '→ Web Dashboard, extensión de navegador y app móvil' }
]

export default function HowItWorks() {
    return (
        <section className={styles.section} id="FUNCIONA">
            <div className={styles.container}>
                <h2 className={styles.title}>Arquitectura Técnica de BiasDetect</h2>
                <p className={styles.subtitle}>Tecnología de IA avanzada para el análisis de sesgos cognitivos</p>
                <div className={styles.grid}>
                    {steps.map((s, i) => (
                        <HowCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    )
}