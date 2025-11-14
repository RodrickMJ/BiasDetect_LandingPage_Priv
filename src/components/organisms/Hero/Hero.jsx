import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Plataforma de Análisis de Sesgos Cognitivos<br />
                    <span className={styles.bold}>Combatiendo la Manipulación Digital</span>
                </h1>
                <p className={styles.desc}>
                    Asistente inteligente que aplica IA avanzada para detectar, clasificar
                    y explicar sesgos cognitivos en discursos públicos, noticias y redes
                    sociales.
                </p>

                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src="/src/assets/movileanddestock.png" alt="Análisis de sesgos" />
                    </div>
                    <div className={styles.text}>
                        <h3>Tecnología avanzada para el pensamiento crítico</h3>
                        <p>
                            Nuestra plataforma utiliza modelos Transformer y técnicas de PLN
                            para identificar 47 tipos de sesgos cognitivos y falacias lógicas
                            en tiempo real.
                        </p>
                        <ul className={styles.features}>
                            <li>Detección de sesgos con modelos LLM</li>
                            <li>Análisis de polarización emocional</li>
                            <li>Explicaciones pedagógicas generadas por IA</li>
                            <li>Dashboard analítico para investigadores</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}