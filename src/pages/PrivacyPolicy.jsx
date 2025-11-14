import { Link } from 'react-router-dom'
import styles from './PrivacyPolicy.module.css'

// Ícono SVG reutilizable
const HomeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        className={styles.icon}
    >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
)

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            {/* BOTÓN DE REGRESO */}
            <div className={styles.back}>
                <Link to="/" className={styles.backLink}>
                    <HomeIcon />
                    Volver al Inicio
                </Link>
            </div>

            <div className={styles.content}>
                <h1>AVISO DE PRIVACIDAD</h1>

                <section>
                    <h2>I. Identidad</h2>
                    <p>
                        <strong>BiasDetect</strong> (en adelante, "El Responsable"), con domicilio en
                        <strong>Universidad Politécnica de Chiapas</strong>, es responsable de recabar sus datos personales,
                        del uso que se les dé a los mismos y de su protección, en cumplimiento de la
                        <em>LFPDPPP</em> y su Reglamento.
                    </p>
                </section>

                <section>
                    <h2>II. Datos Personales Recabados</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Categoría de Datos</th>
                                <th>Descripción y Fuente</th>
                                <th>Datos Específicos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Identificación y Contacto</td>
                                <td>Proporcionados directamente por el Usuario al registrar su cuenta.</td>
                                <td>Nombre completo, Correo Electrónico y Contraseña (almacenada en hash).</td>
                            </tr>
                            <tr>
                                <td>Datos Electrónicos y de Uso</td>
                                <td>Recabados automáticamente a través de la aplicación móvil y web.</td>
                                <td>Dirección IP, Identificadores únicos de dispositivo, datos de navegación, historial de AnalisisDeSesgo, fecha y hora de uso.</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={styles.note}>
                        <strong>Nota Importante sobre Contenido Analizado</strong><br />
                        El texto de los discursos, noticias o publicaciones subidas o analizadas por la aplicación
                        (Documento) se procesa bajo la premisa de que es información de dominio público.
                        <strong>BiasDetect NO considera el contenido del Documento como un Dato Personal</strong>
                        sujeto a este Aviso, debido a que el sistema utiliza técnicas de Procesamiento del Lenguaje Natural (PLN),
                        específicamente Reconocimiento de Entidades Nombradas (NER), para anonimizar el texto de manera
                        irreversible, eliminando cualquier Dato Personal Identificable (DPI) antes de que el contenido
                        sea almacenado o procesado por los modelos de Machine Learning (ML) o Large Language Models (LLM).
                    </div>
                </section>

                <section>
                    <h2>III. Finalidades del Tratamiento de Datos</h2>
                    <ol>
                        <li><strong>Gestión y Operación del Servicio:</strong> Dar acceso a la aplicación, gestionar la cuenta de Usuario y el historial de AnalisisDeSesgo.</li>
                        <li><strong>Mejora de Modelos y Desarrollo:</strong> Utilizar el feedback y las decisiones de los Validadores para reentrenar y ajustar los modelos de Machine Learning (ML) y mejorar la precisión del sistema de detección de sesgos.</li>
                        <li><strong>Seguridad de la Plataforma:</strong> Monitorear el uso del sistema y los datos de conexión (IP) para prevenir fraudes, proteger la seguridad de la información y mantener la integridad de los datos.</li>
                    </ol>
                </section>

                <section>
                    <h2>IV. Transferencias de Datos Personales</h2>
                    <p>El responsable se compromete a no transferir sus datos personales a terceros, salvo las excepciones previstas en el artículo 37 de la LFPDPPP, y aquellas que sean estrictamente necesarias para la provisión del servicio, tales como:</p>
                    <ul>
                        <li><strong>Proveedores de servicios en la nube:</strong> Estos proveedores actúan como Encargados del tratamiento de datos por cuenta del Responsable (ej., hosting, almacenamiento de bases de datos vectoriales para RAG).</li>
                        <li><strong>Autoridades competentes:</strong> En caso de que sean requeridas formalmente y conforme a la legislación aplicable.</li>
                    </ul>
                    <p>En caso de requerir una transferencia que no caiga en las excepciones legales, solicitaremos su consentimiento expreso.</p>
                </section>

                <section>
                    <h2>V. Medios para Ejercer los Derechos ARCO y Revocación del Consentimiento</h2>
                    <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (<strong>Cancelación</strong>); así como oponerse al uso de sus datos para fines específicos (<strong>Oposición</strong>). Estos son conocidos como <strong>Derechos ARCO</strong>.</p>
                    <p>Para el ejercicio de cualquiera de los Derechos ARCO o la revocación del consentimiento, deberá presentar la solicitud correspondiente mediante un correo electrónico a: <a href="mailto:231199@ids.upchiapas.edu.mx">231199@ids.upchiapas.edu.mx</a></p>
                    <p>La solicitud deberá contener:</p>
                    <ol>
                        <li>El nombre completo del titular</li>
                        <li>Documentos que acrediten la identidad o la representación legal del titular.</li>
                        <li>Descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos ARCO.</li>
                        <li>Cualquier otro elemento o documento que facilite la localización de los datos personales.</li>
                    </ol>
                </section>

                <section>
                    <h2>VI. Uso de Tecnologías de Rastreo (Cookies y Web Beacons)</h2>
                    <p>Le informamos que en nuestro sitio web y aplicación móvil utilizamos cookies, web beacons y otras tecnologías de rastreo, que nos permiten monitorear su comportamiento como usuario de internet, brindarle un mejor servicio y experiencia de usuario.</p>
                    <p>Los datos personales que obtenemos de estas tecnologías de rastreo son: zona horaria, dispositivo, sistema operativo, preferencias de idioma y tiempo de navegación en la aplicación.</p>
                    <p>Usted puede deshabilitar el uso de cookies a través de la configuración de su navegador o dispositivo.</p>
                </section>

                <section>
                    <h2>VII. Cambios al Aviso de Privacidad</h2>
                    <p>El Responsable se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad.</p>
                    <p>Toda modificación a este Aviso de Privacidad será comunicada a través de:</p>
                    <ol>
                        <li>Notificación directa a su correo electrónico registrado.</li>
                    </ol>
                    <p><strong>Última Actualización:</strong> 13 de noviembre de 2025</p>
                </section>

                <div className={styles.download}>
                    <a href="/public/AVISO_DE_PRIVACIDAD.pdf" download className={styles.btn}>
                        Descargar Aviso de Privacidad (PDF)
                    </a>
                </div>
            </div>
        </div>
    )
}