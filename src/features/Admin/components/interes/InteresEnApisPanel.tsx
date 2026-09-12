import React, { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { getResumenDeInteres } from "../../../../api/vonageApi";
import { ResumenDeInteres } from "../../../../types/types";
import AdminTable from "../ui/AdminTable";
import AdminPagination from "../ui/AdminPagination";
import "./interes.css";

/**
 * Respuestas a las tres preguntas del proyecto con las APIs de Vonage
 * (#105, server#132).
 *
 * Un formulario cuyas respuestas no ve nadie deja de contestarse en cuanto se
 * nota. Esta es la pantalla que las lee.
 *
 * Pagina y busca en memoria, como `ConsentOverview`: hay como mucho una
 * respuesta por usuaria registrada, así que el conjunto cabe entero y montar
 * paginación de servidor obligaría a tocar el backend para trocear algo que ya
 * está en el navegador.
 */

const POR_PAGINA = 10;

/*
 * Etiquetas legibles del vocabulario cerrado. El catálogo está duplicado a
 * propósito entre el DTO del servidor y el formulario de /welcome; esto es la
 * tercera copia, y es la que traduce a castellano de verdad para el panel.
 */
const PROYECTO: Record<string, string> = {
  si: "Sí, se apunta",
  "me-lo-pienso": "Se lo piensa",
  no: "Ahora no",
};

const HORAS: Record<string, string> = {
  "1-2": "1 o 2 h",
  "3-5": "3 a 5 h",
  mas: "Más de 5 h",
  "ahora-no": "Ahora no puede",
};

const APIS: Record<string, string> = {
  sms: "SMS",
  voz: "Voz",
  video: "Vídeo",
  verificacion: "Verificación",
  whatsapp: "WhatsApp",
  "aun-no-lo-se": "Aún no lo sabe",
};

const etiqueta = (mapa: Record<string, string>, valor: string) =>
  mapa[valor] ?? valor;

const formatFecha = (valor: string) =>
  new Date(valor).toLocaleDateString("es-ES");

/**
 * Insignia del «¿se apunta?».
 *
 * El color no es la única señal: el texto ya distingue los tres estados, para
 * quien no percibe la diferencia entre el verde, el gris y el rojo (WCAG 1.4.1).
 */
const TONO_APUNTE: Record<string, string> = {
  si: "admin-badge--ok",
  no: "admin-badge--alerta",
  "me-lo-pienso": "admin-badge--neutral",
};

/**
 * Quién contestó.
 *
 * Distingue tres situaciones que es fácil confundir en una sola, y confundirlas
 * es peor que no mostrar nada:
 *
 * - Hay nombre → se pinta con su correo debajo.
 * - El servidor manda `null` → la cuenta ya no existe. Sale avisado en vez de
 *   dejar dos celdas vacías que parecen un fallo de carga.
 * - El campo **no viene** → el backend es más antiguo que esta pantalla (por
 *   ejemplo, el servidor arrancado antes de cambiar de rama y sin reiniciar).
 *   Decir «cuenta eliminada» aquí sería mentir sobre una cuenta que existe.
 */
const Contacto: React.FC<{ nombre?: string | null; email?: string | null }> = ({
  nombre,
  email,
}) => {
  if (nombre) {
    return (
      <>
        <p className="font-medium">{nombre}</p>
        <p className="text-gray-500">{email}</p>
      </>
    );
  }

  if (nombre === null) {
    return <p className="text-amber-700">Cuenta eliminada</p>;
  }

  return (
    <p className="text-amber-700">
      El servidor no ha enviado estos datos. Comprueba que esté actualizado.
    </p>
  );
};

const Apunte: React.FC<{ valor: string }> = ({ valor }) => (
  <span
    className={`admin-badge ${TONO_APUNTE[valor] ?? "admin-badge--neutral"}`}
  >
    {etiqueta(PROYECTO, valor)}
  </span>
);

/** Desglose de un recuento, de más a menos. */
const Desglose: React.FC<{
  titulo: string;
  cuenta: Record<string, number>;
  mapa: Record<string, string>;
}> = ({ titulo, cuenta, mapa }) => {
  const filas = Object.entries(cuenta).sort((a, b) => b[1] - a[1]);
  return (
    <div className="admin-card">
      <p className="admin-card__titulo">{titulo}</p>
      {filas.length === 0 ? (
        <p className="admin-card__ayuda">Todavía sin respuestas.</p>
      ) : (
        <ul className="interes-desglose">
          {filas.map(([valor, n]) => (
            <li key={valor} className="interes-desglose__fila">
              <span>{etiqueta(mapa, valor)}</span>
              <strong>{n}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const InteresEnApisPanel: React.FC = () => {
  const [data, setData] = useState<ResumenDeInteres | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    getResumenDeInteres()
      .then(setData)
      .catch(() =>
        setError("No se han podido cargar las respuestas del proyecto.")
      );
  }, []);

  const term = search.trim().toLowerCase();
  const filtradas = useMemo(() => {
    if (!data) return [];
    if (!term) return data.respuestas;
    return data.respuestas.filter(
      (r) =>
        (r.nombre ?? "").toLowerCase().includes(term) ||
        (r.email ?? "").toLowerCase().includes(term)
    );
  }, [data, term]);

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <p className="admin-alerta admin-alerta--error" role="alert">
          {error}
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center admin-min-alto-sm">
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#4737bb" }} />
      </div>
    );
  }

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / POR_PAGINA));
  // Si el filtro deja menos páginas de las que había, la actual podría quedar
  // fuera de rango y mostrar una tabla vacía sin explicación.
  const paginaActual = Math.min(pagina, totalPaginas);
  const visibles = filtradas.slice(
    (paginaActual - 1) * POR_PAGINA,
    paginaActual * POR_PAGINA
  );

  const seApuntan = data.respuestas.filter((r) => r.quiereProyecto === "si");

  /*
   * Copia los correos de quienes han dicho que sí. Mismo manejo que
   * `ListasDeCorreo`, con los dos casos que se olvidan: no copiar en vacío, y
   * comprobar que el portapapeles existe —solo está en contextos seguros— en
   * lugar de fallar en silencio dejando creer que se ha copiado.
   *
   * Filtra el array que ya está en memoria en vez de pedir otro endpoint: sería
   * una segunda fuente de la misma verdad.
   */
  const copiarCorreos = async () => {
    setAviso(null);

    const correos = seApuntan
      .map((r) => r.email)
      .filter((e): e is string => Boolean(e));

    if (correos.length === 0) {
      setAviso("Todavía no se ha apuntado nadie: no hay correos que copiar.");
      return;
    }

    if (!navigator.clipboard) {
      setAviso(
        "Este navegador no deja copiar automáticamente. Copia los correos de la tabla a mano."
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(correos.join(", "));
      setAviso(
        `Copiados ${correos.length} correos al portapapeles, separados por comas. Pégalos en el campo CCO.`
      );
    } catch {
      setAviso("No se han podido copiar los correos. Cópialos de la tabla.");
    }
  };

  const tarjetas = [
    { label: "Respuestas recibidas", value: data.resumen.total },
    { label: "Se apuntan", value: data.resumen.porProyecto.si ?? 0 },
    {
      label: "Se lo piensan",
      value: data.resumen.porProyecto["me-lo-pienso"] ?? 0,
    },
    { label: "Ahora no", value: data.resumen.porProyecto.no ?? 0 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2" style={{ color: "#4737bb" }}>
        Proyecto Vonage
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Quién se apuntaría a montar algo en grupo con las APIs de Vonage, cuántas
        horas podría dedicarle y qué le interesa.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {tarjetas.map((t) => (
          <div key={t.label} className="admin-card">
            <p className="text-2xl font-bold" style={{ color: "#4737bb" }}>
              {t.value}
            </p>
            <p className="text-gray-500 text-sm">{t.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Desglose
          titulo="Horas a la semana"
          cuenta={data.resumen.porHoras}
          mapa={HORAS}
        />
        <Desglose
          titulo="Qué APIs interesan"
          cuenta={data.resumen.porApi}
          mapa={APIS}
        />
      </div>

      <div className="admin-card mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold" style={{ color: "#4737bb" }}>
            Respuestas
          </h2>
          <button
            type="button"
            className="admin-btn admin-btn--primario admin-focus"
            onClick={copiarCorreos}
            disabled={seApuntan.length === 0}
          >
            Copiar los correos de quienes se apuntan ({seApuntan.length})
          </button>
        </div>

        {/* Separado del error: esto es el resultado de una acción, no un fallo. */}
        {aviso && (
          <p className="admin-alerta admin-alerta--ok mb-4" role="status" aria-live="polite">
            {aviso}
          </p>
        )}

        <div className="mb-4">
          <label htmlFor="interes-search" className="sr-only">
            Buscar por nombre o correo
          </label>
          <input
            id="interes-search"
            type="text"
            className="admin-search admin-focus"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPagina(1); // un filtro nuevo empieza por el principio
            }}
            placeholder="Buscar por nombre o correo..."
          />
        </div>

        {filtradas.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-sm">
            {term
              ? `No hay resultados para "${search}"`
              : "Todavía no ha contestado nadie."}
          </p>
        ) : (
          <>
            <AdminTable
              columns={[
                "Contacto",
                "¿Se apunta?",
                "Horas",
                "APIs",
                "Contestó",
              ]}
              caption="Respuestas al proyecto con las APIs de Vonage"
            >
              {visibles.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm">
                    <Contacto nombre={r.nombre} email={r.email} />
                  </td>
                  <td className="p-4 text-sm">
                    <Apunte valor={r.quiereProyecto} />
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {etiqueta(HORAS, r.horasSemana)}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {(r.apis ?? []).map((a) => etiqueta(APIS, a)).join(", ")}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {formatFecha(r.createdAt)}
                  </td>
                </tr>
              ))}
            </AdminTable>

            <AdminPagination
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              onCambiar={setPagina}
              totalElementos={filtradas.length}
              nombreElemento="respuesta"
              etiqueta="Paginación de respuestas"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default InteresEnApisPanel;
