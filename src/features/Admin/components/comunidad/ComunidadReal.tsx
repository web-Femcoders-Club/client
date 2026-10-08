import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Building2,
  CalendarDays,
  ClipboardList,
  MailQuestion,
  UserCheck,
  UserPlus,
  Users,
} from 'lucide-react';
import { getCrmStats } from '../../../../api/adminApi';
import TarjetaResumen from '../resumen/TarjetaResumen';
import { clavesResumen } from '../resumen/clavesResumen';
import AdminTable from '../ui/AdminTable';
import {
  COLABORADORAS,
  ROTULO_TIPO,
  type TipoColaboradora,
} from '../../../../data/colaboradoras';
import '../resumen/resumen-panel.css';
import './comunidad-real.css';

const TIEMPO_FRESCO = 30_000;

const TODOS = 'todos';

/*
 * Comunidad real: las cifras que se pueden defender, cada una con su desglose.
 *
 * Las personas salen del bloque `community` de /admin/crm/stats, que ya
 * deduplica por email en SQL: quien ha ido a cinco eventos cuenta una vez, y
 * quien está registrada en la web y además ha ido a eventos, también una. Esta
 * página no recalcula nada: lo separa para que se vea de dónde sale el total.
 *
 * Comparte clave de caché con el Resumen del panel, así que pasar de una
 * página a otra no repite la petición.
 */
const ComunidadReal: React.FC = () => {
  const crm = useQuery({
    queryKey: clavesResumen.crmStats,
    queryFn: getCrmStats,
    staleTime: TIEMPO_FRESCO,
  });

  const [tipo, setTipo] = useState<TipoColaboradora | typeof TODOS>(TODOS);

  const comunidad = crm.data?.community;
  const asistentesUnicas = comunidad?.identifiedAttendees;
  const registradasSinAsistir =
    comunidad && comunidad.registeredUsers - comunidad.bothRegisteredAndAttended;
  const totalPersonas = comunidad?.knownPeople;

  /*
   * Las dos partes deberían sumar exactamente el total. Si el backend cambia su
   * forma de contar y dejan de cuadrar, se dice aquí en lugar de enseñar tres
   * cifras incoherentes sin aviso.
   */
  const cuadra =
    asistentesUnicas === undefined ||
    registradasSinAsistir === undefined ||
    totalPersonas === undefined ||
    asistentesUnicas + registradasSinAsistir === totalPersonas;

  const tiposPresentes = useMemo(
    () =>
      (Object.keys(ROTULO_TIPO) as TipoColaboradora[]).filter((t) =>
        COLABORADORAS.some((c) => c.tipo === t)
      ),
    []
  );

  const filas = useMemo(
    () =>
      COLABORADORAS.filter((c) => tipo === TODOS || c.tipo === tipo).sort((a, b) =>
        a.nombre.localeCompare(b.nombre, 'es')
      ),
    [tipo]
  );

  const sinBackendActualizado = crm.isSuccess && !comunidad;

  return (
    <div className="resumen">
      <header>
        <h2 className="comunidad-real__titulo">Comunidad real</h2>
        <p className="comunidad-real__intro">
          Cada persona cuenta una sola vez, aunque haya ido a varios eventos o
          esté registrada en la web y además haya asistido.
        </p>
      </header>

      <section aria-labelledby="comunidad-personas-titulo">
        <h3 id="comunidad-personas-titulo" className="resumen__titulo">
          Personas
        </h3>
        {sinBackendActualizado && (
          <p className="comunidad-real__aviso">
            El servidor todavía no envía el desglose de la comunidad. Cuando esté
            actualizado, las cifras aparecerán aquí.
          </p>
        )}
        <div className="resumen__rejilla">
          <TarjetaResumen
            rotulo="Asistentes únicas en Eventbrite"
            cifra={asistentesUnicas}
            Icono={UserCheck}
            nota="Por email: cada asistente cuenta una vez"
            cargando={crm.isPending}
            fallo={crm.isError}
          />
          <TarjetaResumen
            rotulo="Registradas en la web sin asistir a eventos"
            cifra={registradasSinAsistir}
            Icono={UserPlus}
            nota="Su email no aparece entre las asistentes"
            cargando={crm.isPending}
            fallo={crm.isError}
          />
          <TarjetaResumen
            rotulo="Total de personas"
            cifra={totalPersonas}
            Icono={Users}
            tono={cuadra ? 'ok' : 'alerta'}
            nota={
              cuadra
                ? 'Suma de las dos anteriores'
                : 'No cuadra con la suma de las dos anteriores: revisa el cálculo del servidor'
            }
            cargando={crm.isPending}
            fallo={crm.isError}
          />
        </div>
      </section>

      <section aria-labelledby="comunidad-inscripciones-titulo">
        <h3 id="comunidad-inscripciones-titulo" className="resumen__titulo">
          Inscripciones y eventos
        </h3>
        <div className="resumen__rejilla">
          <TarjetaResumen
            rotulo="Inscripciones totales"
            cifra={crm.data?.totalRegistrations}
            Icono={ClipboardList}
            nota="Una por persona y evento: aquí sí se repiten"
            cargando={crm.isPending}
            fallo={crm.isError}
          />
          <TarjetaResumen
            rotulo="Inscripciones sin email"
            cifra={crm.data?.identityGaps?.unidentifiedRegistrations}
            Icono={MailQuestion}
            nota="Eventbrite no dio el email; no se pueden comparar y quedan fuera del total de personas"
            cargando={crm.isPending}
            fallo={crm.isError}
          />
          <TarjetaResumen
            rotulo="Eventos"
            cifra={crm.data?.totalEvents}
            Icono={CalendarDays}
            nota="Todos los de la base de datos, también los de colaboración"
            cargando={crm.isPending}
            fallo={crm.isError}
          />
        </div>
      </section>

      <section aria-labelledby="comunidad-colaboradoras-titulo">
        <h3 id="comunidad-colaboradoras-titulo" className="resumen__titulo">
          Empresas y organizaciones colaboradoras
        </h3>
        <div className="resumen__rejilla">
          <TarjetaResumen
            rotulo="Organizaciones colaboradoras"
            cifra={COLABORADORAS.length}
            Icono={Building2}
            nota="Cada una cuenta una vez, aunque haya colaborado en varios eventos"
          />
        </div>

        <div className="comunidad-real__filtro">
          <label htmlFor="comunidad-tipo">Tipo de organización</label>
          <select
            id="comunidad-tipo"
            className="admin-focus"
            value={tipo}
            onChange={(e) => setTipo(e.target.value as TipoColaboradora | typeof TODOS)}
          >
            <option value={TODOS}>Todas ({COLABORADORAS.length})</option>
            {tiposPresentes.map((t) => (
              <option key={t} value={t}>
                {ROTULO_TIPO[t]} ({COLABORADORAS.filter((c) => c.tipo === t).length})
              </option>
            ))}
          </select>
        </div>

        <AdminTable
          caption="Organizaciones con las que ha colaborado FemCoders Club y sus colaboraciones"
          columns={['Organización', 'Tipo', 'Colaboraciones']}
        >
          {filas.map((c) => (
            <tr key={c.nombre}>
              <th scope="row" className="comunidad-real__nombre">
                {c.nombre}
              </th>
              <td>{ROTULO_TIPO[c.tipo]}</td>
              <td>
                <ul className="comunidad-real__colaboraciones">
                  {c.colaboraciones.map((col) => (
                    <li key={`${col.fecha ?? ''}-${col.descripcion}`}>
                      {col.fecha && (
                        <span className="comunidad-real__fecha">{col.fecha}</span>
                      )}
                      {col.descripcion}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </AdminTable>
      </section>
    </div>
  );
};

export default ComunidadReal;
