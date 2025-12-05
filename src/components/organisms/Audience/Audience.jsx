import AudienceCard from '../../molecules/AudienceCard/AudienceCard'
import styles from './Audience.module.css'

const audience = [
    {
        icon: 'layers',
        title: 'Verificadores de Información',
        arrow: '→ Comparación entre comunicado oficial y noticia sospechosa',
        text: 'Detecta contradicciones y manipulación narrativa en textos que circulan en medios y redes.'
    },
    {
        icon: 'alert',
        title: 'Periodistas y Medios de Comunicación',
        arrow: '→ Análisis automático de distorsión y contexto',
        text: 'Permite validar la fidelidad de noticias externas frente a declaraciones oficiales.'
    },
    {
        icon: 'cube',
        title: 'Analistas Políticos y Equipos de Comunicación',
        arrow: '→ Monitoreo de cómo se reinterpreta o distorsiona un discurso',
        text: 'Ayuda a identificar patrones narrativos y sesgos aplicados por terceros.'
    },
    {
        icon: 'smile',
        title: 'Ciudadanos que buscan verificar rumores',
        arrow: '→ Verificación rápida desde extensión o app',
        text: 'Pega una noticia o comentario y descubre si coincide o contradice el comunicado oficial.'
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