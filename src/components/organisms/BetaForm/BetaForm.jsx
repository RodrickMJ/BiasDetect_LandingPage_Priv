import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Select from '../../atoms/Select/Select'
import styles from './BetaForm.module.css'

export default function BetaForm() {
    return (
        <section className={styles.section} id="FORMULARIO">
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>Únete al Programa Beta de BiasDetect</h2>
                    <p className={styles.subtitle}>Sé parte de la solución contra la manipulación y polarización digital</p>
                    <form className={styles.form}>
                        <Input label="Nombre completo *" placeholder="Tu nombre" required />
                        <Input label="Correo electrónico *" type="email" placeholder="tu@email.com" required />
                        <Select label="¿Cómo planeas usar BiasDetect? (opcional)">
                            <option>Seleccione una Opción</option>
                            <option value="personal">Uso personal</option>
                            <option value="investigacion">Investigación/Academia</option>
                            <option value="educacion">Educación/Enseñanza</option>
                            <option value="periodismo">Periodismo/Medios</option>
                        </Select>
                        <Button variant="primary">Solicitar Acceso a la Beta</Button>
                    </form>
                    <div className={styles.privacy}>
                        <p>&gt; Proyecto ético con fines educativos y de investigación</p>
                        <p>&gt; Tus datos están protegidos y nunca se compartirán con terceros</p>
                        <p>&gt; Contribuye al desarrollo de herramientas contra la desinformación</p>
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" id="privacy" required />
                        <label htmlFor="privacy">
                            He leído y acepto el <a href="/aviso-de-privacidad" target="_blank">Aviso de Privacidad</a>
                        </label>
                    </div>
                    <p className={styles.terms}>
                        Al registrarte, aceptas nuestra <a href="#" className={styles.link}>Política de Privacidad</a> y nuestros <a href="#" className={styles.link}>Términos de Uso</a>.
                        Proyecto con fines de investigación ética en IA.
                    </p>
                </div>
            </div>
        </section>
    )
}