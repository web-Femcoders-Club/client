import React, { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { getResumenListaEspera } from "../../../../api/listaEsperaApi";
import {
  nombreDeTecnologia,
  TECNOLOGIAS_LISTA_ESPERA,
} from "../../../../data/tecnologiasListaEspera";
import { InscripcionConPersona, ResumenListaEspera } from "../../../../types/types";
import AdminTable from "../ui/AdminTable";
import AdminPagination from "../ui/AdminPagination";
import { Contacto, Desglose } from "../interes/InteresEnApisPanel";
import "../interes/interes.css";

/**
 * Lista de espera para futuros proyectos (server#147).
 *
 * Pagina y busca en memoria, como el panel del piloto: hay como mucho una
 * inscripción por cuenta. El filtro «Solo mentoras» es la otra lista que pidió
 * el equipo, sacada de la misma tabla.
 */

const POR_PAGINA = 10;

const NOMBRES = Object.fromEntries(
  TECNOLOGIAS_LISTA_ESPERA.map(({ valor, texto }) => [valor, texto])
);

const formatFecha = (valor: string) =>
  new Date(valor).toLocaleDateString("es-ES");

/** «Otra» se pinta con lo que escribió la persona, si lo hay. */
const tecnologiasDe = (i: InscripcionConPersona) =>
  (i.tecnologias ?? [])
    .map((t) =>
      t === "otra" && i.otraTecnologia
        ? `Otra: ${i.otraTecnologia}`
        : nombreDeTecnologia(t)
    )
    .join(", ");

const ListaEsperaPanel: React.FC = () => {
  const [data, setData] = useState<ResumenListaEspera | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [soloMentoras, setSoloMentoras] = useState(false);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    getResumenListaEspera()
      .then(setData)
      .catch(() => setError("No se ha podido cargar la lista de espera."));
  }, []);

  const term = search.trim().toLowerCase();
  const filtradas = useMemo(() => {
    if (!data) return [];
    return data.inscripciones.filter(
      (i) =>
        (!soloMentoras || i.seOfreceComoMentora) &&
        (!term ||
          (i.nombre ?? "").toLowerCase().includes(term) ||
          (i.email ?? "").toLowerCase().includes(term))
    );
  }, [data, term, soloMentoras]);

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
  // Si el filtro deja menos páginas, la actual podría quedar fuera de rango y
  // mostrar una tabla vacía sin explicación.
  const paginaActual = Math.min(pagina, totalPaginas);
  const visibles = filtradas.slice(
    (paginaActual - 1) * POR_PAGINA,
    paginaActual * POR_PAGINA
  );

  const tarjetas = [
    { label: "Personas apuntadas", value: data.resumen.total },
    { label: "Se ofrecen como mentoras", value: data.resumen.mentoras },
  ];

  const hayFiltro = Boolean(term) || soloMentoras;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2" style={{ color: "#4737bb" }}>
        Lista de espera
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Quién quiere participar en los próximos proyectos de la comunidad, con qué
        tecnologías ha trabajado o le gustaría trabajar y quién se ofrece como
        mentora.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {tarjetas.map((t) => (
          <div key={t.label} className="admin-card">
            <p className="text-2xl font-bold" style={{ color: "#4737bb" }}>
              {t.value}
            </p>
            <p className="text-gray-500 text-sm">{t.label}</p>
          </div>
        ))}
        <Desglose
          titulo="Tecnologías"
          cuenta={data.resumen.porTecnologia}
          mapa={NOMBRES}
        />
      </div>

      <div className="admin-card mb-6">
        <h2 className="text-lg font-semibold mb-4" style={{ color: "#4737bb" }}>
          Inscripciones
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <label htmlFor="lista-espera-search" className="sr-only">
            Buscar por nombre o correo
          </label>
          <input
            id="lista-espera-search"
            type="text"
            className="admin-search admin-focus"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPagina(1); // un filtro nuevo empieza por el principio
            }}
            placeholder="Buscar por nombre o correo..."
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="admin-focus"
              checked={soloMentoras}
              onChange={(e) => {
                setSoloMentoras(e.target.checked);
                setPagina(1);
              }}
            />
            Solo mentoras
          </label>
        </div>

        {filtradas.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-sm">
            {hayFiltro
              ? "Ninguna inscripción cumple el filtro."
              : "Todavía no se ha apuntado nadie."}
          </p>
        ) : (
          <>
            <AdminTable
              columns={["Contacto", "Tecnologías", "Mentora", "Idea", "Se apuntó"]}
              caption="Inscripciones en la lista de espera"
            >
              {visibles.map((i) => (
                <tr
                  key={i.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm">
                    <Contacto nombre={i.nombre} email={i.email} />
                  </td>
                  <td className="p-4 text-sm text-gray-600">{tecnologiasDe(i)}</td>
                  <td className="p-4 text-sm">
                    {/* El texto ya distingue los dos casos; el color no es la
                        única señal (WCAG 1.4.1). */}
                    <span
                      className={`admin-badge ${
                        i.seOfreceComoMentora
                          ? "admin-badge--ok"
                          : "admin-badge--neutral"
                      }`}
                    >
                      {i.seOfreceComoMentora ? "Sí" : "No"}
                    </span>
                  </td>
                  {/* Texto plano: React lo escapa, y `pre-line` respeta los
                      saltos de línea que escribió la persona. */}
                  <td className="p-4 text-sm text-gray-600 whitespace-pre-line">
                    {i.idea ?? "Sin idea"}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {formatFecha(i.createdAt)}
                  </td>
                </tr>
              ))}
            </AdminTable>

            <AdminPagination
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              onCambiar={setPagina}
              totalElementos={filtradas.length}
              nombreElemento="persona"
              etiqueta="Paginación de inscripciones"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ListaEsperaPanel;
