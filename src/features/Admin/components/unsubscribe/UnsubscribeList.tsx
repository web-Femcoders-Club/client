import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PendingUnsubscribeRecord,
  UnsubscribedEmailRecord,
} from "../../../../types/types";
import { AlertTriangle, Loader2 } from "lucide-react";
import {
  getPendingUnsubscribes,
  getUnsubscribed,
} from "../../../../api/adminApi";
import AdminPagination from "../ui/AdminPagination";
import { useDebouncedValue } from "../../../../hooks/useDebouncedValue";

const POR_PAGINA = 20;

/**
 * Bajas de email.
 *
 * La lista y su buscador van contra el servidor. Con el endpoint paginado
 * (server#27), pedirlo sin `page` traía las 20 primeras filas y el contador
 * decía "20 en total": un total que sale de la página, plausible y falso. Y en
 * una lista de bajas, «no aparece» se lee como «no está dada de baja» (#20).
 */
const UnsubscribeList: React.FC = () => {
  const [records, setRecords] = useState<UnsubscribedEmailRecord[]>([]);
  const [totalBajas, setTotalBajas] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [pagina, setPagina] = useState(1);
  const [pending, setPending] = useState<PendingUnsubscribeRecord[]>([]);
  const [resolving, setResolving] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const searchDiferido = useDebouncedValue(search);
  const [newEmail, setNewEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const authHeaders = () => ({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    },
  });

  const loadRecords = React.useCallback(() => {
    setLoading(true);

    getUnsubscribed(pagina, POR_PAGINA, searchDiferido.trim() || undefined)
      .then(({ data, pagination }) => {
        const paginas = Math.max(1, pagination.totalPages);
        setRecords(data);
        setTotalBajas(pagination.totalItems);
        setTotalPaginas(paginas);
        // Si la página pedida ya no existe —se acaba de completar la última
        // baja de la última página— se retrocede en vez de dejar una tabla
        // vacía sin explicación.
        if (pagina > paginas) setPagina(paginas);
      })
      .catch(() => setError("No se pudo cargar la lista de bajas."))
      .finally(() => setLoading(false));

    // Las pendientes se cargan aparte a propósito: si este endpoint falla, la
    // lista de bajas debe seguir viéndose. Son dos preguntas distintas.
    getPendingUnsubscribes()
      .then(setPending)
      .catch(() =>
        setError(
          "No se pudieron cargar las solicitudes pendientes. Puede haber personas esperando su baja."
        )
      );
  }, [pagina, searchDiferido]);

  useEffect(() => {
    loadRecords();
  }, [loadRecords]);

  const handleUnsubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = newEmail.trim();
    if (!email) return;
    if (
      !window.confirm(
        `¿Dar de baja ${email}? Dejará de recibir comunicaciones y se retirará su consentimiento de marketing.`
      )
    ) {
      return;
    }
    setSubmitting(true);
    setFeedback(null);
    setError(null);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/unsubscribe`,
        { email },
        authHeaders()
      );
      setFeedback(
        data.status === "already"
          ? `${email} ya estaba dado de baja.`
          : `${email} dado de baja correctamente.`
      );
      setNewEmail("");
      loadRecords();
    } catch {
      setError("No se pudo procesar la baja. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * Ejecuta la baja de una solicitud pendiente. Usa el mismo endpoint que la
   * baja manual: el backend borra la fila de la cola al completarla, así que
   * no hay un segundo paso que se pueda olvidar.
   */
  const handleResolvePending = async (email: string) => {
    if (
      !window.confirm(
        `¿Dar de baja ${email}? Lo pidió desde la web y no se le pudo enviar el email de confirmación. Dejará de recibir comunicaciones y se retirará su consentimiento de marketing.`
      )
    ) {
      return;
    }
    setResolving(email);
    setFeedback(null);
    setError(null);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/unsubscribe`,
        { email },
        authHeaders()
      );
      setFeedback(
        data.status === "already"
          ? `${email} ya estaba dado de baja.`
          : `${email} dado de baja correctamente.`
      );
      loadRecords();
    } catch {
      setError(`No se pudo dar de baja a ${email}. Inténtalo de nuevo.`);
    } finally {
      setResolving(null);
    }
  };

  /** Días que lleva esperando. Es la medida del incumplimiento, no un adorno. */
  const diasEsperando = (requestedAt: string) =>
    Math.floor(
      (Date.now() - new Date(requestedAt).getTime()) / (1000 * 60 * 60 * 24)
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2" style={{ color: "#4737bb" }}>
        Bajas de email
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Personas que han solicitado no recibir más comunicaciones
      </p>

      {error && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-600 text-sm"
        >
          {error}
        </div>
      )}
      {feedback && (
        <div
          role="status"
          className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-700 text-sm"
        >
          {feedback}
        </div>
      )}

      {pending.length > 0 && (
        <section
          aria-labelledby="pendientes-titulo"
          className="rounded-xl p-6 mb-6 border-2"
          style={{ backgroundColor: "#fef2f2", borderColor: "#991b1b" }}
        >
          <div className="flex items-start gap-3 mb-2">
            <AlertTriangle
              className="w-6 h-6 shrink-0"
              style={{ color: "#7f1d1d" }}
              aria-hidden="true"
            />
            <div>
              <h2
                id="pendientes-titulo"
                className="text-lg font-semibold"
                style={{ color: "#7f1d1d" }}
              >
                {pending.length === 1
                  ? "1 solicitud de baja sin completar"
                  : `${pending.length} solicitudes de baja sin completar`}
              </h2>
              <p className="text-sm mt-1" style={{ color: "#7f1d1d" }}>
                Pidieron la baja desde la web y no se les pudo enviar el email
                de confirmación. Siguen recibiendo comunicaciones hasta que la
                completes aquí.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="table w-full bg-white border border-gray-200">
              <caption className="sr-only">
                Solicitudes de baja pendientes de completar, la más antigua
                primero
              </caption>
              <thead>
                <tr style={{ backgroundColor: "#7f1d1d10" }}>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold"
                    style={{ color: "#7f1d1d" }}
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold"
                    style={{ color: "#7f1d1d" }}
                  >
                    Lo pidió
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold"
                    style={{ color: "#7f1d1d" }}
                  >
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {pending.map((p) => {
                  const dias = diasEsperando(p.requestedAt);
                  return (
                    <tr key={p.id} className="border-b border-gray-100">
                      <td className="p-4 text-sm">{p.email}</td>
                      <td className="p-4 text-sm" style={{ color: "#3d3d3d" }}>
                        {new Date(p.requestedAt).toLocaleString("es-ES")}
                        <span className="block text-xs" style={{ color: "#7f1d1d" }}>
                          {dias === 0
                            ? "hoy"
                            : dias === 1
                            ? "hace 1 día"
                            : `hace ${dias} días`}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          type="button"
                          onClick={() => handleResolvePending(p.email)}
                          disabled={resolving === p.email}
                          aria-busy={resolving === p.email}
                          className="px-4 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-60"
                          style={{ backgroundColor: "#991b1b" }}
                        >
                          {resolving === p.email
                            ? "Procesando…"
                            : "Completar baja"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2" style={{ color: "#4737bb" }}>
          Dar de baja un email
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Para peticiones recibidas por otro canal (email, en persona). La baja
          queda registrada con origen «admin» y retira el consentimiento de
          marketing de la usuaria.
        </p>
        <form onSubmit={handleUnsubscribe} className="flex gap-3">
          <label htmlFor="admin-unsubscribe-email" className="sr-only">
            Email a dar de baja
          </label>
          <input
            id="admin-unsubscribe-email"
            type="email"
            required
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="email@ejemplo.com"
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
          />
          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-60"
            style={{ backgroundColor: "#ea4f33" }}
          >
            {submitting ? "Procesando…" : "Dar de baja"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: "#4737bb" }}>
            Lista de bajas
          </h2>
          <span className="text-sm text-gray-500">
            {totalBajas} en total
          </span>
        </div>

        <div className="mb-4">
          <label htmlFor="buscar-baja" className="sr-only">
            Buscar por email
          </label>
          <input
            id="buscar-baja"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPagina(1); // una búsqueda nueva empieza por el principio
            }}
            placeholder="Buscar por email..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center admin-min-alto-sm">
            <Loader2
              className="w-8 h-8 animate-spin"
              style={{ color: "#4737bb" }}
            />
            <span className="sr-only">Cargando bajas…</span>
          </div>
        ) : records.length === 0 ? (
          <p className="text-center text-gray-400 py-8 text-sm">
            {search ? `No hay resultados para "${search}"` : "No hay bajas registradas."}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr style={{ backgroundColor: "#4737bb10" }}>
                  <th className="p-4 text-left font-semibold" style={{ color: "#4737bb" }}>
                    Email
                  </th>
                  <th className="p-4 text-left font-semibold" style={{ color: "#4737bb" }}>
                    Fecha de baja
                  </th>
                  <th className="p-4 text-left font-semibold" style={{ color: "#4737bb" }}>
                    Origen
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 text-sm">{r.email}</td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(r.unsubscribedAt).toLocaleString("es-ES")}
                    </td>
                    <td className="p-4 text-sm text-gray-500">{r.source ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <AdminPagination
          paginaActual={pagina}
          totalPaginas={totalPaginas}
          onCambiar={setPagina}
          totalElementos={totalBajas}
          nombreElemento="baja"
          etiqueta="Paginación de la lista de bajas"
        />
      </div>
    </div>
  );
};

export default UnsubscribeList;
