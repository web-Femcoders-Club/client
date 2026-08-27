import React, { useEffect, useState } from "react";
import axios from "axios";
import { UnsubscribedEmailRecord } from "../../../../types/types";
import { Loader2 } from "lucide-react";

const UnsubscribeList: React.FC = () => {
  const [records, setRecords] = useState<UnsubscribedEmailRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const authHeaders = () => ({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    },
  });

  const loadRecords = React.useCallback(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/admin/unsubscribed`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((r) => setRecords(r.data))
      .catch(() => setError("No se pudo cargar la lista de bajas."))
      .finally(() => setLoading(false));
  }, []);

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

  const filtered = search.trim()
    ? records.filter((r) =>
        r.email.toLowerCase().includes(search.toLowerCase())
      )
    : records;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#4737bb" }} />
      </div>
    );
  }

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
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
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
          <span className="text-sm text-gray-500">{records.length} en total</span>
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por email..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {filtered.length === 0 ? (
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
                {filtered.map((r) => (
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
      </div>
    </div>
  );
};

export default UnsubscribeList;
