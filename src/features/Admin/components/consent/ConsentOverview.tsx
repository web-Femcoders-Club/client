import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { ConsentOverviewResponse } from "../../../../types/types";

const formatDate = (value: string | null) =>
  value ? new Date(value).toLocaleDateString("es-ES") : "—";

/**
 * Contactos por página. La lista completa hacía la vista inmanejable: con más
 * de cien filas, encontrar a una persona concreta exigía recorrerla entera.
 */
const POR_PAGINA = 10;

/**
 * Estado de consentimiento por contacto (RGPD): qué aceptó cada usuaria,
 * cuándo, y si está dada de baja. Es la vista que se presenta ante la AEPD.
 */
const ConsentOverview: React.FC = () => {
  const [data, setData] = useState<ConsentOverviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    axios
      .get(`${import.meta.env.VITE_API_URL}/admin/consents`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => setData(r.data))
      .catch(() => setError("No se pudo cargar el estado de consentimientos."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#4737bb" }} />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div
        role="alert"
        className="bg-red-50 border border-red-200 rounded-lg p-4 m-6 text-red-600 text-sm"
      >
        {error ?? "Sin datos."}
      </div>
    );
  }

  const term = search.trim().toLowerCase();
  const filtered = term
    ? data.contacts.filter(
        (c) =>
          c.email.toLowerCase().includes(term) ||
          c.name.toLowerCase().includes(term)
      )
    : data.contacts;

  const totalPaginas = Math.max(1, Math.ceil(filtered.length / POR_PAGINA));
  // Si el filtro deja menos páginas de las que había, la página actual podría
  // quedar fuera de rango y mostrar una tabla vacía sin explicación.
  const paginaActual = Math.min(pagina, totalPaginas);
  const visibles = filtered.slice(
    (paginaActual - 1) * POR_PAGINA,
    paginaActual * POR_PAGINA
  );

  const summaryCards = [
    { label: "Usuarias registradas", value: data.summary.totalUsers },
    { label: "Con privacidad aceptada", value: data.summary.withPrivacyConsent },
    { label: "Con opt-in de marketing", value: data.summary.withMarketingConsent },
    { label: "Bajas totales", value: data.summary.unsubscribed },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2" style={{ color: "#4737bb" }}>
        Consentimientos
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Estado de consentimiento de cada contacto: privacidad, comunicaciones y
        bajas. Esta es la información que se presenta ante la AEPD.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {summaryCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl shadow-md p-4">
            <p className="text-2xl font-bold" style={{ color: "#4737bb" }}>
              {card.value}
            </p>
            <p className="text-gray-500 text-sm">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: "#4737bb" }}>
            Usuarias registradas
          </h2>
          <span className="text-sm text-gray-500">
            {filtered.length} de {data.contacts.length}
          </span>
        </div>

        <div className="mb-4">
          <label htmlFor="consent-search" className="sr-only">
            Buscar por nombre o email
          </label>
          <input
            id="consent-search"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPagina(1); // un filtro nuevo empieza por el principio
            }}
            placeholder="Buscar por nombre o email..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-sm">
            {search ? `No hay resultados para "${search}"` : "No hay contactos."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr style={{ backgroundColor: "#4737bb10" }}>
                  {[
                    "Contacto",
                    "Alta",
                    "Privacidad aceptada",
                    "Marketing",
                    "Baja",
                  ].map((h) => (
                    <th
                      key={h}
                      className="p-4 text-left font-semibold"
                      style={{ color: "#4737bb" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibles.map((c) => (
                  <tr
                    key={c.idUser}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-sm">
                      <p className="font-medium">{c.name}</p>
                      <p className="text-gray-500">{c.email}</p>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {formatDate(c.registeredAt)}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {c.acceptedPrivacyAt ? (
                        formatDate(c.acceptedPrivacyAt)
                      ) : (
                        <span className="text-amber-700">Sin registro</span>
                      )}
                    </td>
                    <td className="p-4 text-sm">
                      {c.marketingConsent ? (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          Sí
                        </span>
                      ) : (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                          No
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm">
                      {c.unsubscribed ? (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                          Baja {formatDate(c.unsubscribedAt)}
                          {c.unsubscribeSource
                            ? ` (${c.unsubscribeSource})`
                            : ""}
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPaginas > 1 && (
              <nav
                className="flex items-center justify-between gap-4 py-4"
                aria-label="Paginación de contactos"
              >
                <button
                  type="button"
                  onClick={() => setPagina(paginaActual - 1)}
                  disabled={paginaActual === 1}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronLeft size={16} aria-hidden="true" />
                  Anterior
                </button>

                {/*
                  aria-live: quien usa lector de pantalla no ve el cambio de
                  tabla, así que se le anuncia en qué página está.
                */}
                <p className="text-sm text-gray-600" aria-live="polite">
                  Página {paginaActual} de {totalPaginas}
                  <span className="text-gray-400">
                    {" "}
                    · {filtered.length} contacto
                    {filtered.length === 1 ? "" : "s"}
                  </span>
                </p>

                <button
                  type="button"
                  onClick={() => setPagina(paginaActual + 1)}
                  disabled={paginaActual === totalPaginas}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Siguiente
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </nav>
            )}
          </div>
        )}
      </div>

      {data.externalUnsubscribes.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2" style={{ color: "#4737bb" }}>
            Bajas sin cuenta de usuaria
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Emails dados de baja que no corresponden a ninguna usuaria
            registrada (p. ej. asistentes de eventos).
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr style={{ backgroundColor: "#4737bb10" }}>
                  {["Email", "Fecha de baja", "Origen"].map((h) => (
                    <th
                      key={h}
                      className="p-4 text-left font-semibold"
                      style={{ color: "#4737bb" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.externalUnsubscribes.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-sm">{r.email}</td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(r.unsubscribedAt).toLocaleString("es-ES")}
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {r.source ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsentOverview;
