import React, { useEffect, useRef, useState } from "react";
import AdminTable from "../ui/AdminTable";
import {
  getCrmStats,
  getCrmAttendees,
  getCrmAttendeeDetail,
  getCrmAttendeeByDni,
  downloadCrmExport,
  getCrmEventAttendees,
  forceEventbriteSync,
  getCrmUsersCrosscheck,
} from "../../../../api/adminApi";
import {
  CrmStats,
  CrmAttendee,
  CrmAttendeeDetail,
  CrmEventStat,
  CrmEventAttendeesResponse,
  CrmUsersCrosscheck,
  Pagination,
} from "../../../../types/types";
import {
  Users,
  Repeat,
  CalendarDays,
  Calendar,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Search,
} from "lucide-react";

type Tab = "stats" | "attendees";

const CrmDashboard: React.FC = () => {
  const [sincronizando, setSincronizando] = useState(false);
  const [crosscheckPagina, setCrosscheckPagina] = useState(1);
  const [resultadoSync, setResultadoSync] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<Tab>("stats");
  const [stats, setStats] = useState<CrmStats | null>(null);
  const [crosscheck, setCrosscheck] = useState<CrmUsersCrosscheck | null>(null);
  const [crosscheckSearch, setCrossCheckSearch] = useState("");
  const [attendees, setAttendees] = useState<CrmAttendee[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAttendee, setSelectedAttendee] = useState<CrmAttendeeDetail | null>(null);
  const [selectedRow, setSelectedRow] = useState<CrmAttendee | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [detailEventsPage, setDetailEventsPage] = useState(1);
  const DETAIL_EVENTS_PER_PAGE = 5;
  const detailRef = useRef<HTMLDivElement>(null);

  // Filtros servidor para la lista de asistentes
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filterEventId, setFilterEventId] = useState("");

  // Panel de asistentes de un evento concreto (desde tab stats)
  const [eventPanel, setEventPanel] = useState<CrmEventAttendeesResponse | null>(null);
  const [eventPanelLoading, setEventPanelLoading] = useState(false);
  const [eventPanelSearch, setEventPanelSearch] = useState("");
  const eventPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const [statsData, crosscheckData] = await Promise.all([
          getCrmStats(),
          getCrmUsersCrosscheck(),
        ]);
        setStats(statsData);
        setCrosscheck(crosscheckData);
      } catch {
        setError("No se pudieron cargar las estadísticas del CRM.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    if (activeTab !== "attendees") return;
    setFilterText("");
    const fetchAttendees = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCrmAttendees(
          filterEventId ? 1 : currentPage,
          filterEventId ? 1000 : 20,
          filterEventId || undefined,
          dateFrom || undefined,
          dateTo || undefined
        );
        setAttendees(data.data);
        setPagination(data.pagination);
      } catch {
        setError("No se pudieron cargar las asistentes.");
      } finally {
        setLoading(false);
      }
    };
    fetchAttendees();
  }, [activeTab, currentPage, filterEventId, dateFrom, dateTo]);

  const loadEventAttendees = (eventId: string) => {
    setEventPanel(null);
    setEventPanelSearch("");
    setEventPanelLoading(true);
    getCrmEventAttendees(eventId)
      .then((data) => {
        setEventPanel(data);
        setTimeout(() => eventPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      })
      .catch(() => setError("No se pudieron cargar las asistentes de este evento."))
      .finally(() => setEventPanelLoading(false));
  };

  // Limpia el detalle al cambiar el filtro
  useEffect(() => {
    setSelectedAttendee(null);
    setError(null);
  }, [filterText]);

  const isFilteredByEvent = !!filterEventId;

  // Deduplica por email en caso de que el backend devuelva duplicados
  const uniqueAttendees = Array.from(
    new Map(attendees.map((a) => [a.email, a])).values()
  );

  const filteredAttendees = filterText.trim()
    ? uniqueAttendees.filter((a) => {
        const q = filterText.toLowerCase();
        return (
          a.firstName.toLowerCase().includes(q) ||
          a.lastName.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          (a.dni ?? "").toLowerCase().includes(q)
        );
      })
    : uniqueAttendees;

  const loadAttendeeDetail = (attendee: CrmAttendee | { email: string; firstName: string; lastName: string; dni?: string | null }) => {
    setSelectedRow(attendee as CrmAttendee);
    setDetailLoading(true);
    setSelectedAttendee(null);
    setDetailEventsPage(1);
    setError(null);
    const request = attendee.dni
      ? getCrmAttendeeByDni(attendee.dni)
      : getCrmAttendeeDetail(attendee.email);
    request
      .then((detail) => {
        setSelectedAttendee(detail);
        setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      })
      .catch(() => setError(`No se pudo cargar el detalle de "${attendee.email}".`))
      .finally(() => setDetailLoading(false));
  };

  const closeDetail = () => {
    setSelectedAttendee(null);
    setSelectedRow(null);
    setDetailEventsPage(1);
    setError(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading && activeTab === "stats" && !stats) {
    return (
      <div className="flex justify-center items-center admin-min-alto">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 animate-spin" style={{ color: "#4737bb" }} />
          <p className="text-gray-500">Cargando datos CRM...</p>
        </div>
      </div>
    );
  }

  /**
   * Usuarias del crosscheck ya filtradas y troceadas.
   *
   * Antes se pintaban las 106 de golpe. Se pagina en el cliente porque el
   * endpoint devuelve la lista completa (ver #27, pendiente en el servidor);
   * cuando ese endpoint pagine, esto se sustituye por la paginación real.
   */
  const CROSSCHECK_POR_PAGINA = 15;
  const crosscheckFiltradas = (crosscheck?.users ?? []).filter((u) => {
    const q = crosscheckSearch.toLowerCase();
    return (
      !q ||
      `${u.userName} ${u.userLastName}`.toLowerCase().includes(q) ||
      u.userEmail.toLowerCase().includes(q)
    );
  });
  const crosscheckTotalPaginas = Math.max(
    1,
    Math.ceil(crosscheckFiltradas.length / CROSSCHECK_POR_PAGINA),
  );
  // Si el filtro deja menos páginas, la actual podría quedar fuera de rango y
  // mostrar una tabla vacía sin explicación.
  const crosscheckPaginaActual = Math.min(
    crosscheckPagina,
    crosscheckTotalPaginas,
  );
  const crosscheckVisibles = crosscheckFiltradas.slice(
    (crosscheckPaginaActual - 1) * CROSSCHECK_POR_PAGINA,
    crosscheckPaginaActual * CROSSCHECK_POR_PAGINA,
  );

  /**
   * Fuerza el sync manual. Existía el endpoint en el backend desde hacía
   * tiempo pero no había forma de lanzarlo desde el panel: había que esperar
   * al cron o entrar a la API a mano.
   */
  const sincronizarAhora = async () => {
    setSincronizando(true);
    setResultadoSync(null);
    try {
      await forceEventbriteSync();
      setResultadoSync("Sincronización completada. Recargando datos…");
      // Los datos en pantalla son de antes del sync: recargarlos es la mitad
      // útil de la acción.
      const nuevas = await getCrmStats();
      setStats(nuevas);
      setResultadoSync("Sincronización completada.");
    } catch {
      setResultadoSync(
        "No se pudo completar la sincronización. Vuelve a intentarlo."
      );
    } finally {
      setSincronizando(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#4737bb" }}>
            CRM — Asistentes a Eventos
          </h1>
          <p className="text-gray-500 text-sm">
            Datos sincronizados desde Eventbrite
          </p>
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={sincronizarAhora}
            disabled={sincronizando}
            className="px-4 py-2 rounded-lg text-sm text-white disabled:opacity-50 admin-focus"
            style={{ backgroundColor: "#4737bb" }}
          >
            {sincronizando ? "Sincronizando…" : "Sincronizar Eventbrite ahora"}
          </button>
          {/*
            aria-live: el sync tarda, y quien usa lector de pantalla no ve el
            cambio de estado del botón.
          */}
          {resultadoSync && (
            <p className="text-sm mt-2 text-gray-600" aria-live="polite">
              {resultadoSync}
            </p>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveTab("stats")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "stats"
              ? "border-current"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          style={activeTab === "stats" ? { color: "#4737bb", borderColor: "#4737bb" } : {}}
        >
          Estadísticas globales
        </button>
        <button
          type="button"
          onClick={() => { setActiveTab("attendees"); setCurrentPage(1); }}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "attendees"
              ? "border-current"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          style={activeTab === "attendees" ? { color: "#4737bb", borderColor: "#4737bb" } : {}}
        >
          Lista de asistentes
        </button>
      </div>

      {error && !selectedAttendee && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* STATS TAB */}
      {activeTab === "stats" && stats && (
        <div>
          {/*
            Comunidad: cuántas PERSONAS distintas conoce la asociación.
            Va antes que las tarjetas de actividad porque es la cifra que se
            usa fuera —memorias, subvenciones, patrocinadores— y la que antes
            no existía: había registradas por un lado y asistentes por otro,
            sin una unión deduplicada.
          */}
          {stats.community && (
            <section
              className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4"
              style={{ borderLeftColor: "#4737bb" }}
              aria-labelledby="comunidad-titulo"
            >
              <h3
                id="comunidad-titulo"
                className="text-lg font-bold mb-1"
                style={{ color: "#4737bb" }}
              >
                Comunidad
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Personas distintas, sin contar dos veces a quien está
                registrada y además ha asistido.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-3xl font-bold" style={{ color: "#4737bb" }}>
                    {stats.community.knownPeople}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Personas conocidas
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.community.registeredUsers}
                  </p>
                  <p className="text-sm text-gray-500">Registradas en la web</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.community.identifiedAttendees}
                  </p>
                  <p className="text-sm text-gray-500">Han asistido</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-700">
                    {stats.community.bothRegisteredAndAttended}
                  </p>
                  <p className="text-sm text-gray-500">
                    Registradas y asistentes
                  </p>
                </div>
              </div>

              {/*
                Las inscripciones sin identificar se muestran, no se esconden:
                son personas reales cuyo email Eventbrite no facilitó. Quedan
                fuera del total porque podrían ser alguien ya contado.
              */}
              {!!stats.identityGaps?.unidentifiedRegistrations && (
                <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <strong className="text-gray-700">
                    {stats.identityGaps.unidentifiedRegistrations}
                  </strong>{" "}
                  inscripciones sin email identificable (Eventbrite solo
                  facilitó los datos de quien compró). No se cuentan arriba
                  porque podrían corresponder a personas ya incluidas.
                </p>
              )}
            </section>
          )}

          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#4737bb" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Personas que han asistido</p>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#4737bb" }}>
                    {stats.uniqueAttendees}
                  </p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: "#4737bb20" }}>
                  <Users className="w-6 h-6" style={{ color: "#4737bb" }} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#ea4f33" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Asistentes recurrentes</p>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#ea4f33" }}>
                    {stats.repeatAttendees}
                  </p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: "#ea4f3320" }}>
                  <Repeat className="w-6 h-6" style={{ color: "#ea4f33" }} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#10B981" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total inscripciones</p>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#10B981" }}>
                    {stats.totalRegistrations}
                  </p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: "#10B98120" }}>
                  <CalendarDays className="w-6 h-6" style={{ color: "#10B981" }} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#F59E0B" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total de eventos</p>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#F59E0B" }}>
                    {stats.totalEvents ?? stats.eventStats.length}
                  </p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: "#F59E0B20" }}>
                  <Calendar className="w-6 h-6" style={{ color: "#F59E0B" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Top attendees */}
          {stats.topAttendees.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-1" style={{ color: "#4737bb" }}>
                Top asistentes
              </h2>
              <p className="text-xs text-gray-400 mb-4">Haz clic para ver el historial completo</p>
                <AdminTable
                  columns={["#", "Nombre", "Email", { label: "Eventos", align: "center" }]}
                  caption="Personas que más eventos han asistido"
                >
                    {stats.topAttendees.map((a, i) => (
                      <tr
                        key={a.email}
                        className="hover:bg-gray-50 border-b border-gray-100 cursor-pointer"
                        onClick={() => loadAttendeeDetail({ email: a.email, firstName: a.firstName, lastName: a.lastName, dni: null })}
                      >
                        <td className="p-4 text-gray-400 text-sm">{i + 1}</td>
                        <td className="p-4 font-medium">{a.firstName} {a.lastName}</td>
                        <td className="p-4 text-gray-600 text-sm">{a.email}</td>
                        <td className="p-4 text-center">
                          <span
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ backgroundColor: "#4737bb20", color: "#4737bb" }}
                          >
                            {a.eventsAttended}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </AdminTable>
            </div>
          )}

          {/* Event stats */}
          {stats.eventStats.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-1" style={{ color: "#4737bb" }}>
                Asistencia por evento
              </h2>
              <p className="text-xs text-gray-400 mb-4">Haz clic en un evento para ver sus asistentes</p>
                <AdminTable
                  columns={["Evento", { label: "Asistentes", align: "center" }]}
                  caption="Asistentes por evento"
                >
                    {stats.eventStats
                      .slice()
                      .sort((a: CrmEventStat, b: CrmEventStat) => b.attendeesCount - a.attendeesCount)
                      .map((ev: CrmEventStat) => (
                        <tr
                          key={ev.eventId}
                          className="hover:bg-gray-50 border-b border-gray-100 cursor-pointer"
                          onClick={() => loadEventAttendees(ev.eventId)}
                        >
                          <td className="p-4 text-sm font-medium" style={{ color: "#4737bb" }}>{ev.eventName}</td>
                          <td className="p-4 text-center">
                            <span
                              className="px-3 py-1 rounded-full text-sm font-medium"
                              style={{ backgroundColor: "#ea4f3320", color: "#ea4f33" }}
                            >
                              {ev.attendeesCount}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </AdminTable>
            </div>
          )}

          {/* Cruce usuarios registrados vs asistentes */}
          {crosscheck && (
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h2 className="text-lg font-semibold mb-1" style={{ color: "#4737bb" }}>
                Usuarias registradas en la plataforma
              </h2>
              <div className="flex flex-wrap gap-6 mb-4">
                <span className="text-sm text-gray-500">
                  Total registradas: <strong className="text-gray-800">{crosscheck.totalUsers}</strong>
                </span>
                <span className="text-sm" style={{ color: "#10B981" }}>
                  Han asistido a algún evento: <strong>{crosscheck.attendedAtLeastOne}</strong>
                </span>
                <span className="text-sm" style={{ color: "#ea4f33" }}>
                  Nunca han asistido: <strong>{crosscheck.neverAttended}</strong>
                </span>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={crosscheckSearch}
                  onChange={(e) => {
                    setCrossCheckSearch(e.target.value);
                    setCrosscheckPagina(1); // un filtro nuevo empieza por el principio
                  }}
                  placeholder="Buscar por nombre o email..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                />
              </div>
                <AdminTable
                  columns={["Nombre", "Email", { label: "Eventos asistidos", align: "center" }]}
                  caption="Usuarias registradas y su asistencia"
                >
                    {crosscheckVisibles.map((u) => (
                        <tr key={u.idUser} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 text-sm font-medium">{u.userName} {u.userLastName}</td>
                          <td className="p-3 text-sm text-gray-600">{u.userEmail}</td>
                          <td className="p-3 text-center">
                            {u.eventsAttended === 0 ? (
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-400">
                                Nunca
                              </span>
                            ) : (
                              <span
                                className="px-3 py-1 rounded-full text-sm font-medium"
                                style={{ backgroundColor: "#10B98120", color: "#10B981" }}
                              >
                                {u.eventsAttended}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </AdminTable>

              {crosscheckTotalPaginas > 1 && (
                <nav
                  className="flex items-center justify-between gap-4 pt-4"
                  aria-label="Paginación de usuarias registradas"
                >
                  <button
                    type="button"
                    onClick={() => setCrosscheckPagina(crosscheckPaginaActual - 1)}
                    disabled={crosscheckPaginaActual === 1}
                    className="px-3 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Anterior
                  </button>
                  {/* aria-live: quien usa lector de pantalla no ve que la
                      tabla ha cambiado de página. */}
                  <p className="text-sm text-gray-600" aria-live="polite">
                    Página {crosscheckPaginaActual} de {crosscheckTotalPaginas}
                    <span className="text-gray-400">
                      {" "}
                      · {crosscheckFiltradas.length} usuaria
                      {crosscheckFiltradas.length === 1 ? "" : "s"}
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setCrosscheckPagina(crosscheckPaginaActual + 1)}
                    disabled={crosscheckPaginaActual === crosscheckTotalPaginas}
                    className="px-3 py-2 rounded-lg text-sm border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Siguiente
                  </button>
                </nav>
              )}
            </div>
          )}

          {/* Panel asistentes de evento concreto */}
          {(eventPanelLoading || eventPanel) && (
            <div ref={eventPanelRef} className="mt-6 bg-gray-50 rounded-xl border border-gray-200 p-6 relative">
              <button
                type="button"
                onClick={() => setEventPanel(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Cerrar panel de evento"
              >
                <X className="w-5 h-5" />
              </button>

              {eventPanelLoading && (
                <div className="flex items-center gap-3 text-gray-500">
                  <Loader2 className="w-5 h-5 animate-spin" style={{ color: "#4737bb" }} />
                  Cargando asistentes del evento...
                </div>
              )}

              {eventPanel && !eventPanelLoading && (() => {
                const q = eventPanelSearch.toLowerCase();
                const filteredEventAttendees = q
                  ? eventPanel.attendees.filter((a) =>
                      `${a.firstName} ${a.lastName}`.toLowerCase().includes(q) ||
                      a.email.toLowerCase().includes(q) ||
                      (a.dni ?? "").toLowerCase().includes(q)
                    )
                  : eventPanel.attendees;
                return (
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: "#4737bb" }}>
                      {eventPanel.event.name}
                    </h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 mb-4">
                      <span>{formatDate(eventPanel.event.date)}</span>
                      <span>{eventPanel.event.location}</span>
                      <span className="font-medium" style={{ color: "#ea4f33" }}>{eventPanel.totalAttendees} asistentes</span>
                    </div>
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={eventPanelSearch}
                        onChange={(e) => setEventPanelSearch(e.target.value)}
                        placeholder="Buscar por nombre, email o DNI..."
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                      />
                      {eventPanelSearch && (
                        <p className="text-xs text-gray-400 mt-1">
                          {filteredEventAttendees.length} resultado{filteredEventAttendees.length !== 1 ? "s" : ""}
                        </p>
                      )}
                    </div>
                      <AdminTable
                        columns={["Nombre", "Email", "DNI"]}
                        caption="Asistentes del evento"
                      >
                          {filteredEventAttendees.length === 0 ? (
                            <tr>
                              <td colSpan={3} className="p-6 text-center text-gray-400 text-sm">
                                No hay asistentes que coincidan con "{eventPanelSearch}"
                              </td>
                            </tr>
                          ) : filteredEventAttendees.map((a) => (
                            <tr key={a.email} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="p-3 text-sm font-medium">{a.firstName} {a.lastName}</td>
                              <td className="p-3 text-sm text-gray-600">{a.email}</td>
                              <td className="p-3 text-sm text-gray-500">{a.dni || "—"}</td>
                            </tr>
                          ))}
                        </AdminTable>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Detalle de asistente desde top attendees */}
          {(detailLoading || selectedAttendee) && (
            <div ref={detailRef} className="mt-6 bg-gray-50 rounded-xl border border-gray-200 p-6 relative">
              <button
                type="button"
                onClick={closeDetail}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Cerrar detalle"
              >
                <X className="w-5 h-5" />
              </button>
              {detailLoading && (
                <div className="flex items-center gap-3 text-gray-500">
                  <Loader2 className="w-5 h-5 animate-spin" style={{ color: "#4737bb" }} />
                  Cargando historial...
                </div>
              )}
              {selectedAttendee && !detailLoading && (() => {
                const sortedEvents = Array.from(
                  new Map(selectedAttendee.events.map((ev) => [ev.eventId, ev])).values()
                ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                const totalEventPages = Math.ceil(sortedEvents.length / DETAIL_EVENTS_PER_PAGE);
                const pagedEvents = sortedEvents.slice(
                  (detailEventsPage - 1) * DETAIL_EVENTS_PER_PAGE,
                  detailEventsPage * DETAIL_EVENTS_PER_PAGE
                );
                return (
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#4737bb" }}>
                      {selectedAttendee.firstName} {selectedAttendee.lastName}
                    </h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mb-3">
                      <span><strong>Email:</strong> {selectedAttendee.email}</span>
                      <span><strong>DNI:</strong> {selectedAttendee.dni || selectedRow?.dni || "—"}</span>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: "#4737bb20", color: "#4737bb" }}>
                      {selectedAttendee.eventsAttended} evento{selectedAttendee.eventsAttended !== 1 ? "s" : ""}
                    </span>
                      <AdminTable
                        columns={["Evento", "Fecha", "Lugar"]}
                        caption="Eventos a los que ha asistido"
                      >
                          {pagedEvents.map((ev) => (
                            <tr key={ev.eventId} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="p-3 text-sm">
                                <a href={ev.eventUrl} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#4737bb" }}>
                                  {ev.name}
                                </a>
                              </td>
                              <td className="p-3 text-sm text-gray-600">{formatDate(ev.date)}</td>
                              <td className="p-3 text-sm text-gray-600">{ev.location}</td>
                            </tr>
                          ))}
                        </AdminTable>
                    {totalEventPages > 1 && (
                      <div className="flex justify-center items-center gap-2 mt-4">
                        <button type="button" onClick={() => setDetailEventsPage((p) => Math.max(p - 1, 1))} disabled={detailEventsPage === 1} className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-100 transition-colors" aria-label="Eventos anteriores">
                          <ChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="text-xs text-gray-500">{detailEventsPage} / {totalEventPages}</span>
                        <button type="button" onClick={() => setDetailEventsPage((p) => Math.min(p + 1, totalEventPages))} disabled={detailEventsPage === totalEventPages} className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-100 transition-colors" aria-label="Eventos siguientes">
                          <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* ATTENDEES TAB */}
      {activeTab === "attendees" && (
        <div>
          {/* Filtros servidor + exportar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">Filtrar por periodo o evento</p>
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex flex-col gap-1 flex-1 admin-min-ancho-sm">
                <label className="text-xs text-gray-500">Desde</label>
                <input
                  type="date"
                  value={dateFrom}
                  title="Fecha desde"
                  onChange={(e) => { setDateFrom(e.target.value); setCurrentPage(1); }}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1 admin-min-ancho-sm">
                <label className="text-xs text-gray-500">Hasta</label>
                <input
                  type="date"
                  value={dateTo}
                  title="Fecha hasta"
                  onChange={(e) => { setDateTo(e.target.value); setCurrentPage(1); }}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                />
              </div>
              {stats && stats.eventStats.length > 0 && (
                <div className="flex flex-col gap-1 flex-1 admin-min-ancho">
                  <label className="text-xs text-gray-500">Evento concreto</label>
                  <select
                    value={filterEventId}
                    title="Filtrar por evento"
                    onChange={(e) => { setFilterEventId(e.target.value); setCurrentPage(1); }}
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm admin-focus bg-white"
                  >
                    <option value="">Todos los eventos</option>
                    {stats.eventStats
                      .slice()
                      .sort((a, b) => a.eventName.localeCompare(b.eventName))
                      .map((ev) => (
                        <option key={ev.eventId} value={ev.eventId}>{ev.eventName}</option>
                      ))}
                  </select>
                </div>
              )}
              {(dateFrom || dateTo || filterEventId) && (
                <button
                  type="button"
                  onClick={() => { setDateFrom(""); setDateTo(""); setFilterEventId(""); setCurrentPage(1); }}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  Limpiar filtros
                </button>
              )}
              <div className="flex gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() =>
                    downloadCrmExport("csv").catch(() =>
                      alert("No se pudo exportar el CSV. Inténtalo de nuevo.")
                    )
                  }
                  className="px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"
                  style={{ backgroundColor: "#10B981" }}
                >
                  <Download className="w-4 h-4" />
                  CSV
                </button>
                <button
                  type="button"
                  onClick={() =>
                    downloadCrmExport("pdf").catch(() =>
                      alert("No se pudo exportar el PDF. Inténtalo de nuevo.")
                    )
                  }
                  className="px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2"
                  style={{ backgroundColor: "#ea4f33" }}
                >
                  <Download className="w-4 h-4" />
                  PDF
                </button>
              </div>
            </div>
          </div>

          {/* Attendees list */}
          {loading ? (
            <div className="flex justify-center items-center admin-min-alto-sm">
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: "#4737bb" }} />
            </div>
          ) : (
            <>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold" style={{ color: "#4737bb" }}>
                    Asistentes únicas
                  </h2>
                  {pagination && (
                    <span className="text-sm text-gray-500">
                      {pagination.totalItems} en total
                    </span>
                  )}
                </div>

                {/* Filtro local */}
                <div className="mb-4">
                  <input
                    type="text"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    placeholder={isFilteredByEvent ? "Buscar en este evento..." : "Filtrar por nombre, apellido, email o DNI... (haz clic en una fila para ver el detalle)"}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm admin-focus"
                  />
                  {filterText && (
                    <p className="text-xs text-gray-400 mt-1">
                      {isFilteredByEvent
                        ? `${filteredAttendees.length} resultado${filteredAttendees.length !== 1 ? "s" : ""} de ${uniqueAttendees.length} asistentes en este evento`
                        : `${filteredAttendees.length} resultado${filteredAttendees.length !== 1 ? "s" : ""} en esta página`}
                    </p>
                  )}
                </div>

                  <AdminTable
                    columns={["Nombre", "Email", "DNI", { label: "Eventos", align: "center" }]}
                    caption="Asistentes con el mismo DNI"
                  >
                      {filteredAttendees.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-gray-400 text-sm">
                            No hay asistentes que coincidan con "{filterText}"
                          </td>
                        </tr>
                      ) : filteredAttendees.map((a) => (
                        <tr
                          key={a.email}
                          className="hover:bg-gray-50 border-b border-gray-100 cursor-pointer"
                          onClick={() => loadAttendeeDetail(a)}
                        >
                          <td className="p-4 font-medium">{a.firstName} {a.lastName}</td>
                          <td className="p-4 text-gray-600 text-sm">{a.email}</td>
                          <td className="p-4 text-gray-500 text-sm">{a.dni ?? "—"}</td>
                          <td className="p-4 text-center">
                            <span
                              className="px-3 py-1 rounded-full text-sm font-medium"
                              style={{ backgroundColor: "#4737bb20", color: "#4737bb" }}
                            >
                              {a.eventsAttended}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </AdminTable>

                {/* Pagination */}
                {!isFilteredByEvent && pagination && pagination.totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={!pagination.hasPreviousPage}
                      className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                      aria-label="Página anterior"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm text-gray-600">
                      Página {pagination.currentPage} de {pagination.totalPages}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, pagination.totalPages))}
                      disabled={!pagination.hasNextPage}
                      className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                      aria-label="Página siguiente"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                )}
              </div>

              {/* Detalle de asistente — aparece debajo de la tabla al hacer clic en una fila */}
              {(detailLoading || selectedAttendee || error) && (
                <div ref={detailRef} className="mt-6 bg-gray-50 rounded-xl border border-gray-200 p-6 relative">
                  <button
                    type="button"
                    onClick={closeDetail}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    aria-label="Cerrar detalle"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {detailLoading && (
                    <div className="flex items-center gap-3 text-gray-500">
                      <Loader2 className="w-5 h-5 animate-spin" style={{ color: "#4737bb" }} />
                      Cargando detalle...
                    </div>
                  )}

                  {error && !detailLoading && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}

                  {selectedAttendee && !detailLoading && (() => {
                    const sortedEvents = Array.from(
                      new Map(selectedAttendee.events.map((ev) => [ev.eventId, ev])).values()
                    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    const totalEventPages = Math.ceil(sortedEvents.length / DETAIL_EVENTS_PER_PAGE);
                    const pagedEvents = sortedEvents.slice(
                      (detailEventsPage - 1) * DETAIL_EVENTS_PER_PAGE,
                      detailEventsPage * DETAIL_EVENTS_PER_PAGE
                    );
                    return (
                      <div>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: "#4737bb" }}>
                          {selectedAttendee.firstName} {selectedAttendee.lastName}
                        </h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mb-3">
                          <span><strong>Email:</strong> {selectedAttendee.email}</span>
                          <span><strong>DNI:</strong> {selectedAttendee.dni || selectedRow?.dni || "—"}</span>
                        </div>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                          style={{ backgroundColor: "#4737bb20", color: "#4737bb" }}
                        >
                          {selectedAttendee.eventsAttended} evento{selectedAttendee.eventsAttended !== 1 ? "s" : ""}
                        </span>
                          <AdminTable
                            columns={["Evento", "Fecha", "Lugar"]}
                            caption="Eventos de esta persona"
                          >
                              {pagedEvents.map((ev) => (
                                <tr key={ev.eventId} className="border-b border-gray-100 hover:bg-gray-50">
                                  <td className="p-3 text-sm">
                                    <a
                                      href={ev.eventUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:underline"
                                      style={{ color: "#4737bb" }}
                                    >
                                      {ev.name}
                                    </a>
                                  </td>
                                  <td className="p-3 text-sm text-gray-600">{formatDate(ev.date)}</td>
                                  <td className="p-3 text-sm text-gray-600">{ev.location}</td>
                                </tr>
                              ))}
                            </AdminTable>
                        {totalEventPages > 1 && (
                          <div className="flex justify-center items-center gap-2 mt-4">
                            <button
                              type="button"
                              onClick={() => setDetailEventsPage((p) => Math.max(p - 1, 1))}
                              disabled={detailEventsPage === 1}
                              className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                              aria-label="Eventos anteriores"
                            >
                              <ChevronLeft className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="text-xs text-gray-500">
                              {detailEventsPage} / {totalEventPages}
                            </span>
                            <button
                              type="button"
                              onClick={() => setDetailEventsPage((p) => Math.min(p + 1, totalEventPages))}
                              disabled={detailEventsPage === totalEventPages}
                              className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                              aria-label="Eventos siguientes"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CrmDashboard;
