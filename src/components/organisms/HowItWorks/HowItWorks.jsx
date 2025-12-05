import HowCard from '../../molecules/HowCard/HowCard'
import styles from './HowItWorks.module.css'

const steps = [
    { 
        icon: 'smile', 
        title: 'Ingesta y Procesamiento del Comunicado', 
        arrow: '→ Scraping, limpieza y normalización del texto oficial para análisis' 
    },
    { 
        icon: 'cube', 
        title: 'Análisis Semántico y Detección de Sesgos', 
        arrow: '→ Relevancia, contradicción (NLI) y clasificación de sesgos cognitivos' 
    },
    { 
        icon: 'alert', 
        title: 'Contexto Histórico con RAG', 
        arrow: '→ Recuperación de antecedentes de comunicados previos para enriquecer el análisis' 
    },
    { 
        icon: 'clock', 
        title: 'Generación de Explicaciones', 
        arrow: '→ Señalamiento de sesgos, distorsiones y evidencias textuales' 
    },
    { 
        icon: 'layers', 
        title: 'API Inteligente Multiplataforma', 
        arrow: '→ Integración con Web Dashboard, extensiones de navegador y apps móviles' 
    }
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