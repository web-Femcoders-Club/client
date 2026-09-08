import React from 'react';
import {
  CalendarDays,
  Check,
  Mail,
  MailX,
  MessageSquare,
  UserCheck,
  UserPlus,
  Users,
} from 'lucide-react';
import TarjetaResumen from './TarjetaResumen';
import { useResumenPanel } from './useResumenPanel';
import './resumen-panel.css';

/** «1 comentario» / «4 comentarios», sin dejar el número pegado a un plural falso. */
const plural = (n: number, singular: string, muchos: string) =>
  `${n} ${n === 1 ? singular : muchos}`;

/*
 * Resumen del panel, en la ruta índice de /admin.
 *
 * Hasta ahora esa ruta no existía: el <Routes> del panel declaraba las nueve
 * secciones y ninguna `index`, así que entrar en /admin dejaba el área de
 * trabajo literalmente vacía.
 *
 * Lo que se enseña responde a «qué hay que hacer hoy», no a «cuántas usuarias
 * hay»: esa cifra ya vive en Estadísticas Usuarias y repetirla aquí obligaría a
 * mantener el mismo dato en dos sitios. De ahí las dos bandas: primero las
 * colas de trabajo, que llevan a su sección de un clic, y debajo el pulso de la
 * comunidad, que es solo informativo.
 */
const ResumenPanel: React.FC = () => {
  const {
    comentarios,
    bajas,
    contactos,
    usuarias,
    crm,
    esperaMasLarga,
    bajasEnAlerta,
    colasVacias,
  } = useResumenPanel();

  const numComentarios = comentarios.data?.length;
  const numBajas = bajas.data?.length;
  const sinClasificar = contactos.data?.conteo['sin-clasificar'];

  /*
   * `knownPeople` es la cifra que el propio tipo describe como la defendible
   * ante un patrocinador. Si el backend es anterior a ese campo, se cae a
   * asistentes únicas en lugar de no enseñar nada.
   */
  const personasConocidas =
    crm.data?.community?.knownPeople ?? crm.data?.uniqueAttendees;

  const notaDeBajas = (() => {
    if (!numBajas) return undefined;
    if (esperaMasLarga === null) return undefined;
    return bajasEnAlerta
      ? `La más antigua lleva ${plural(esperaMasLarga, 'día', 'días')} esperando`
      : `La más antigua lleva ${plural(esperaMasLarga, 'día', 'días')}`;
  })();

  return (
    <div className="resumen">
      <section aria-labelledby="resumen-pendientes-titulo">
        <h2 id="resumen-pendientes-titulo" className="resumen__titulo">
          Requiere tu atención
        </h2>

        {colasVacias ? (
          <p className="resumen__todo-al-dia">
            <Check aria-hidden="true" />
            Todo al día: no hay comentarios por moderar, bajas sin procesar ni
            contactos sin clasificar.
          </p>
        ) : (
          <div className="resumen__rejilla">
            <TarjetaResumen
              rotulo="Comentarios sin moderar"
              cifra={numComentarios}
              Icono={MessageSquare}
              destino="/admin/comments"
              tono={numComentarios ? 'alerta' : 'neutral'}
              cargando={comentarios.isPending}
              fallo={comentarios.isError}
              descripcionAccesible={
                numComentarios === undefined
                  ? 'Comentarios sin moderar, cargando. Ir a Gestionar Comentarios'
                  : `${plural(
                      numComentarios,
                      'comentario pendiente',
                      'comentarios pendientes'
                    )} de moderar. Ir a Gestionar Comentarios`
              }
            />

            {/*
              Las bajas van aparte del resto: es la única cola con un plazo legal
              detrás. El RGPD da un mes para atender una solicitud, y hasta ahora
              ese contador no se veía sin entrar en la sección.
            */}
            <TarjetaResumen
              rotulo="Bajas sin procesar"
              cifra={numBajas}
              Icono={MailX}
              destino="/admin/unsubscribed"
              tono={bajasEnAlerta ? 'alerta' : 'neutral'}
              nota={notaDeBajas}
              cargando={bajas.isPending}
              fallo={bajas.isError}
              descripcionAccesible={
                numBajas === undefined
                  ? 'Bajas sin procesar, cargando. Ir a Bajas de email'
                  : `${plural(
                      numBajas,
                      'solicitud de baja sin procesar',
                      'solicitudes de baja sin procesar'
                    )}${notaDeBajas ? `. ${notaDeBajas}` : ''}. Ir a Bajas de email`
              }
            />

            <TarjetaResumen
              rotulo="Contactos sin clasificar"
              cifra={sinClasificar}
              Icono={Mail}
              destino="/admin/listas"
              cargando={contactos.isPending}
              fallo={contactos.isError}
              descripcionAccesible={
                sinClasificar === undefined
                  ? 'Contactos sin clasificar, cargando. Ir a Listas de Correo'
                  : `${plural(
                      sinClasificar,
                      'contacto sin clasificar',
                      'contactos sin clasificar'
                    )}. Ir a Listas de Correo`
              }
            />
          </div>
        )}
      </section>

      <section aria-labelledby="resumen-pulso-titulo">
        <h2 id="resumen-pulso-titulo" className="resumen__titulo">
          Pulso de la comunidad
        </h2>
        <div className="resumen__rejilla">
          <TarjetaResumen
            rotulo="Usuarias registradas"
            cifra={usuarias.data?.totalUsers}
            Icono={Users}
            cargando={usuarias.isPending}
            fallo={usuarias.isError}
          />
          <TarjetaResumen
            rotulo="Nuevas esta semana"
            cifra={usuarias.data?.newThisWeek}
            Icono={UserPlus}
            cargando={usuarias.isPending}
            fallo={usuarias.isError}
          />
          <TarjetaResumen
            rotulo="Personas conocidas"
            cifra={personasConocidas}
            Icono={UserCheck}
            cargando={crm.isPending}
            fallo={crm.isError}
          />
          <TarjetaResumen
            rotulo="Eventos realizados"
            cifra={crm.data?.totalEvents}
            Icono={CalendarDays}
            cargando={crm.isPending}
            fallo={crm.isError}
          />
        </div>
      </section>
    </div>
  );
};

export default ResumenPanel;
