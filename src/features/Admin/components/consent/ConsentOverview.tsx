import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { ConsentOverviewResponse } from "../../../../types/types";
import AdminTable from "../ui/AdminTable";
import AdminPagination from "../ui/AdminPagination";

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
      <div className="flex justify-center items-center admin-min-alto-sm">
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
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-sm">
            {search ? `No hay resultados para "${search}"` : "No hay contactos."}
          </p>
        ) : (
          <>
          <AdminTable
            columns={[
              "Contacto",
              "Alta",
              "Privacidad aceptada",
              "Marketing",
              "Baja",
            ]}
            caption="Estado de consentimiento por contacto"
          >
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
          </AdminTable>

          <AdminPagination
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onCambiar={setPagina}
            totalElementos={filtered.length}
            nombreElemento="contacto"
            etiqueta="Paginación de contactos"
          />
          </>
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
          <AdminTable
            columns={["Email", "Fecha de baja", "Origen"]}
            caption="Bajas de emails sin cuenta en la web"
          >
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
          </AdminTable>
        </div>
      )}
    </div>
  );
};

export default ConsentOverview;
