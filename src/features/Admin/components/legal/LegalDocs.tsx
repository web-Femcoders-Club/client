import React from "react";
import "./LegalDocs.css";

/**
 * Ficha interna de los tratamientos de datos de la asociación.
 *
 * Existe para que el equipo pueda responder "¿qué datos guardamos, para qué y
 * cuánto tiempo?" sin abrir el código ni buscar a quien tenga el repositorio.
 * Ante una inspección o una petición de derechos, la respuesta está aquí.
 *
 * Es contenido estático a propósito: son decisiones de la asociación, no datos
 * que cambien solos. Cuando cambie una decisión, se cambia aquí y en la
 * política pública — que es la que vale de cara a las personas.
 */

interface Tratamiento {
  dato: string;
  finalidad: string;
  conservacion: string;
  destinatarios: string;
  origen: string;
  nota?: string;
}

const TRATAMIENTOS: Tratamiento[] = [
  {
    dato: "Email (registro)",
    finalidad: "Gestionar la cuenta y las comunicaciones de la asociación",
    conservacion: "Hasta que la persona se da de baja",
    destinatarios: "Brevo (envío de correo)",
    origen: "Formulario de registro de la web",
  },
  {
    dato: "Nombre y apellidos",
    finalidad: "Identificación en la comunidad y gestión de la participación",
    conservacion: "Hasta la baja",
    destinatarios: "Brevo, Eventbrite",
    origen: "Registro web y formularios de Eventbrite",
  },
  {
    dato: "Consentimiento de comunicaciones",
    finalidad:
      "Base legal de los envíos a quienes se registraron en la web. Sin él no se les puede escribir",
    conservacion: "Mientras dure la actividad de comunicación",
    destinatarios: "Nadie: solo uso interno",
    origen: "Casilla del registro, desmarcada por defecto",
    nota:
      "No aplica a quienes se inscribieron a un evento: a esas personas se les escribe por interés legítimo, no por consentimiento (ver la fila siguiente).",
  },
  {
    dato: "Email de asistentes a eventos",
    finalidad:
      "Informar de las siguientes actividades de la asociación, base legal de interés legítimo (RGPD art. 6.1.f)",
    conservacion:
      "Hasta que la persona pide la baja. Es el registro de la comunidad, no un dato logístico del evento",
    destinatarios: "Brevo (envío de correo)",
    origen: "Formularios de Eventbrite, importados por la API",
    nota:
      "La ponderación que justifica esta base está en docs/cumplimiento/base-legal-envios.md del repositorio del servidor. Solo ampara actividades propias y gratuitas: si un envío incluyera publicidad de patrocinadores, deja de valer.",
  },
  {
    dato: "DNI",
    finalidad:
      "Lista de acceso a las instalaciones de la empresa anfitriona, que exige identificación para dejar entrar",
    conservacion: "3 meses tras el evento; después se elimina",
    destinatarios: "La empresa anfitriona, solo para el control de acceso",
    origen: "Formulario de Eventbrite, solo en los eventos que lo requieren",
    nota:
      "No se pide en el registro de la web. El registro de quién entró lo conserva la propia empresa en su recepción: nuestra copia es temporal y redundante.",
  },
  {
    dato: "Bajas de comunicaciones",
    finalidad:
      "Garantizar que quien pidió no recibir correos no aparezca en ningún envío ni exportación",
    conservacion:
      "Mientras dure la actividad de marketing: borrarla reactivaría los envíos",
    destinatarios: "Nadie: solo uso interno",
    origen: "Enlace del email o petición gestionada desde el panel",
  },
  {
    dato: "Imágenes de eventos",
    finalidad: "Difusión de las actividades de la asociación",
    conservacion: "Ver la política de privacidad",
    destinatarios: "Redes sociales y web pública",
    origen: "Fotografía y vídeo durante los eventos",
  },
];

interface Salvaguarda {
  titulo: string;
  descripcion: string;
}

const SALVAGUARDAS: Salvaguarda[] = [
  {
    titulo: "Ningún envío incluye a quien se dio de baja",
    descripcion:
      "Todas las exportaciones cruzan contra la lista de bajas en un punto único del código. En las vistas de gestión la baja se marca en lugar de ocultarse, para no perder la trazabilidad: quien prepare un envío debe excluir a las marcadas.",
  },
  {
    titulo: "El DNI no sale en las exportaciones",
    descripcion:
      "Las exportaciones del CRM no incluyen el DNI salvo que se pida expresamente para la lista de acceso de un evento. En ese caso el fichero se descarga con otro nombre, para que quien lo reciba sepa que contiene datos identificativos.",
  },
  {
    titulo: "El DNI se borra a los 3 meses",
    descripcion:
      "Un proceso pone a nulo el DNI de los asistentes a eventos celebrados hace más de 3 meses y deja constancia de la fecha en que se hizo, como prueba de que la política se cumple.",
  },
  {
    titulo: "Los avisos internos no llevan datos personales",
    descripcion:
      "Cuando alguien se da de baja, el aviso al buzón del club indica el origen y la fecha, no la dirección: la finalidad es enterarse del movimiento, no saber quién. El dato se consulta en este panel, con acceso restringido.",
  },
];

interface TipoCorreo {
  tipo: string;
  ejemplos: string;
  llevaPie: boolean;
  porQue: string;
}

/**
 * Qué correos necesitan el pie legal y cuáles no.
 *
 * La distinción no es un tecnicismo: un aviso de que un evento cambia de sala
 * es información que la persona necesita sobre algo a lo que se apuntó, y
 * ofrecerle darse de baja ahí sería absurdo — dejaría de enterarse de los
 * cambios del evento al que va. En cambio, anunciar un evento nuevo es difusión
 * y sin enlace de baja no es legal.
 */
const TIPOS_DE_CORREO: TipoCorreo[] = [
  {
    tipo: "Difusión",
    ejemplos:
      "Anuncio de un evento nuevo, newsletter, novedades del club, resumen de actividades",
    llevaPie: true,
    porQue:
      "Es una comunicación que la persona no ha pedido. La ley exige poder dejar de recibirla de forma sencilla y gratuita, en cada envío.",
  },
  {
    tipo: "Transaccional",
    ejemplos:
      "Cambio de hora o sala, cancelación, recordatorio a quien ya está inscrita, respuesta a una consulta",
    llevaPie: false,
    porQue:
      "Es información sobre algo que la persona solicitó. Si se diera de baja, dejaría de enterarse de los cambios del evento al que va a asistir.",
  },
];

interface Pendiente {
  texto: string;
  responsable: string;
}

const PENDIENTES: Pendiente[] = [
  {
    texto:
      "Registro de actividades de tratamiento (RGPD art. 30), con Brevo, Eventbrite y Railway como encargados y sus contratos",
    responsable: "Asociación",
  },
  {
    texto:
      "Explicar en el formulario de Eventbrite por qué se pide el DNI, para que la persona lo sepa al rellenarlo",
    responsable: "Quien gestiona Eventbrite",
  },
  {
    texto:
      'Añadir al formulario de Eventbrite de los próximos eventos una casilla desmarcada por defecto: «Deseo recibir información por email sobre futuros eventos y actividades de FemCoders Club». Quien se inscriba a partir de entonces entra con consentimiento expreso, que es la base legal más sólida. Desmarcada por defecto es obligatorio: una casilla premarcada no es consentimiento válido',
    responsable: "Quien gestiona Eventbrite",
  },
  {
    texto:
      "Validar con asesoría el texto de las casillas de consentimiento y la base legal de la inferencia de género",
    responsable: "Asesoría legal",
  },
];

const LegalDocs: React.FC = () => {
  return (
    <section className="legal-docs" aria-labelledby="legal-docs-title">
      <h2 id="legal-docs-title">Documentación de tratamientos</h2>
      <p className="legal-docs__intro">
        Qué datos guarda la asociación, con qué finalidad, cuánto tiempo y quién
        los recibe. Esta ficha es de uso interno: la versión que vale de cara a
        las personas es la{" "}
        <a href="/" className="legal-docs__link">
          política de privacidad
        </a>{" "}
        publicada en la web, y ambas deben decir lo mismo.
      </p>

      <h3 id="tratamientos">Datos que se tratan</h3>
      <div className="legal-docs__scroll" tabIndex={0} role="region" aria-labelledby="tratamientos">
        <table className="legal-docs__table">
          <caption className="legal-docs__caption">
            Cada dato con su finalidad, plazo de conservación, destinatarios y
            origen
          </caption>
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Para qué</th>
              <th scope="col">Cuánto tiempo</th>
              <th scope="col">Quién lo recibe</th>
              <th scope="col">De dónde viene</th>
            </tr>
          </thead>
          <tbody>
            {TRATAMIENTOS.map((t) => (
              <tr key={t.dato}>
                <th scope="row">{t.dato}</th>
                <td>{t.finalidad}</td>
                <td>{t.conservacion}</td>
                <td>{t.destinatarios}</td>
                <td>
                  {t.origen}
                  {t.nota && <span className="legal-docs__nota">{t.nota}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Medidas aplicadas</h3>
      <p className="legal-docs__intro">
        Comprobaciones que el sistema hace por su cuenta. Constan aquí porque una
        medida que funciona pero no está escrita no demuestra nada ante una
        inspección.
      </p>
      <ul className="legal-docs__lista">
        {SALVAGUARDAS.map((s) => (
          <li key={s.titulo}>
            <strong>{s.titulo}.</strong> {s.descripcion}
          </li>
        ))}
      </ul>

      <h3 id="pie-correos">Cuándo hay que poner el pie legal en un correo</h3>
      <p className="legal-docs__intro">
        Mientras los envíos se hagan desde el correo del club, el pie hay que
        ponerlo a mano. Lo práctico es tenerlo guardado como firma en Gmail
        (Configuración → General → Firma) y usar la que corresponda: una firma
        con pie para los correos de difusión y otra sin él para los avisos de
        eventos.
      </p>
      <div
        className="legal-docs__scroll"
        tabIndex={0}
        role="region"
        aria-labelledby="pie-correos"
      >
        <table className="legal-docs__table">
          <caption className="legal-docs__caption">
            Qué tipo de correo lleva pie legal y por qué
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipo de correo</th>
              <th scope="col">Ejemplos</th>
              <th scope="col">¿Lleva pie?</th>
              <th scope="col">Por qué</th>
            </tr>
          </thead>
          <tbody>
            {TIPOS_DE_CORREO.map((c) => (
              <tr key={c.tipo}>
                <th scope="row">{c.tipo}</th>
                <td>{c.ejemplos}</td>
                <td>
                  <strong>{c.llevaPie ? "Sí, siempre" : "No hace falta"}</strong>
                </td>
                <td>{c.porQue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="legal-docs__intro">
        <strong>Cuidado al mezclar:</strong> un aviso de cambio de evento que
        aprovecha para anunciar otra actividad deja de ser transaccional y pasa a
        necesitar el pie. Ante la duda, ponerlo.
      </p>

      {/*
        * El enlace de baja va en ABSOLUTO, al contrario que el resto del sitio
        * (FaqModal y Privacidad usan el relativo, y ahí es lo correcto).
        *
        * Este bloque existe para copiarse y pegarse en la firma de Gmail. Un
        * href relativo depende de que el navegador lo resuelva al copiar y del
        * origen desde el que se copie: desde localhost saldría una URL de
        * localhost dentro del correo.
        *
        * La baja de un clic es una de las salvaguardas sobre las que se apoya
        * la ponderación de interés legítimo. Si llega rota al buzón, se cae una
        * pata del argumento legal — no es un detalle de estilo.
        */}
      <h4>Texto del pie</h4>
      <blockquote className="legal-docs__pie-correo">
        <p>
          Recibes este correo porque formas parte de la comunidad FemCoders Club:
          te inscribiste en alguno de nuestros eventos o te registraste en
          nuestra web.
        </p>
        <p>
          Si no deseas recibir más comunicaciones, puedes darte de baja en un
          clic:{" "}
          <a href="https://femcodersclub.com/baja-email" className="legal-docs__link">
            femcodersclub.com/baja-email
          </a>
        </p>
        <p>
          Responsable del tratamiento: FemCoders Club. Usamos tu email únicamente
          para informarte de nuestras actividades. Puedes ejercer tus derechos de
          acceso, rectificación, supresión, oposición, limitación y portabilidad
          escribiendo a info@femcodersclub.com, y presentar una reclamación ante
          la Agencia Española de Protección de Datos. Más información en nuestra
          política de privacidad, disponible en femcodersclub.com
        </p>
      </blockquote>
      <p className="legal-docs__intro">
        Va en letra pequeña y gris, pero <strong>el enlace de baja tiene que
        verse</strong>: un texto legal ilegible o de bajo contraste no cumple la
        obligación de informar, y es justo lo que se mira en una inspección.
      </p>

      <h3>Pendiente</h3>
      <ul className="legal-docs__lista">
        {PENDIENTES.map((p) => (
          <li key={p.texto}>
            {p.texto} <span className="legal-docs__responsable">{p.responsable}</span>
          </li>
        ))}
      </ul>

      <p className="legal-docs__pie">
        Si cambias algo aquí, cámbialo también en la política de privacidad
        pública: si dicen cosas distintas, la que vale es la que leyó la persona.
      </p>
    </section>
  );
};

export default LegalDocs;
