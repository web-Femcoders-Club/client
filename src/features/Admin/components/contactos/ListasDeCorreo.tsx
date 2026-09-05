import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import {
  ContactoDeLista,
  FuenteDelGenero,
  ListaDeGenero,
  OrigenDelContacto,
  ResumenDeListas,
} from "../../../../types/types";
import AdminTable from "../ui/AdminTable";
import AdminPagination from "../ui/AdminPagination";
import "./listas-de-correo.css";

/**
 * Listas de correo por género, para preparar envíos (#13).
 *
 * Cuatro listas —mujeres, hombres, otros y sin clasificar— que juntan a las
 * personas registradas en la web con las que llegaron por Eventbrite, sin
 * repetir a nadie. El backend (server#16) hace la unión y excluye las bajas.
 *
 * El trabajo real de esta pantalla es la pestaña **Sin clasificar**: repasarla
 * y mover a cada persona a la lista que le toca. Por eso la acción de mover
 * está en la propia fila y no escondida en un menú.
 *
 * ## Lo que NO se puede tocar desde aquí
 *
 * Si el género lo declaró la persona en su perfil, no hay botón de mover: la
 * fila muestra por qué. El backend además lo rechaza con un 409, así que no
 * depende de que la interfaz se acuerde.
 */

const POR_PAGINA = 20;

const LISTAS: ReadonlyArray<{
  id: ListaDeGenero;
  etiqueta: string;
  /** Qué es esta lista, para quien la ve por primera vez. */
  ayuda: string;
}> = [
  {
    id: "mujer",
    etiqueta: "Mujeres",
    ayuda: "Para los eventos dirigidos a mujeres.",
  },
  {
    id: "hombre",
    etiqueta: "Hombres",
    ayuda: "Se usan sobre todo para saber cuánta gente hay en los mixtos.",
  },
  {
    id: "otros",
    etiqueta: "Otros",
    ayuda:
      "Personas que eligieron «No binario» o «Prefiero no decir» al registrarse. No entran automáticamente en ningún envío segmentado: decidid vosotras en cada caso.",
  },
  {
    id: "sin-clasificar",
    etiqueta: "Sin clasificar",
    ayuda:
      "No se ha podido deducir el género de su nombre. Repasadlas y movedlas a la lista que corresponda; lo que cambiéis aquí no lo deshace ninguna sincronización.",
  },
];

const ETIQUETA_ORIGEN: Record<OrigenDelContacto, string> = {
  registro: "Registro web",
  eventbrite: "Eventbrite",
  ambos: "Ambos",
};

const ETIQUETA_FUENTE: Record<FuenteDelGenero, string> = {
  declarado: "Lo eligió ella",
  corregido: "Corregido a mano",
  inferido: "Deducido del nombre",
  ninguna: "Sin determinar",
};

interface RespuestaPaginada {
  data: ContactoDeLista[];
  pagination: { currentPage: number; totalPages: number; totalItems: number };
}

const cabeceras = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

const ListasDeCorreo: React.FC = () => {
  const [listaActiva, setListaActiva] = useState<ListaDeGenero>("mujer");
  const [pagina, setPagina] = useState(1);
  const [contactos, setContactos] = useState<ContactoDeLista[]>([]);
  const [paginacion, setPaginacion] = useState({
    totalPages: 1,
    totalItems: 0,
  });
  const [resumen, setResumen] = useState<ResumenDeListas | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  /**
   * Un solo sitio para lo que hay que contarle a la persona que está usando
   * la pantalla: se copiaron N correos, se movió a fulanita, no se pudo. Va a
   * una región `aria-live`, así que también se anuncia en voz alta.
   */
  const [aviso, setAviso] = useState<string | null>(null);
  const [moviendo, setMoviendo] = useState<string | null>(null);

  const refsPestanas = useRef<Array<HTMLButtonElement | null>>([]);

  const api = import.meta.env.VITE_API_URL;

  const cargar = useCallback(
    async (lista: ListaDeGenero, paginaPedida: number) => {
      setCargando(true);
      setError(null);
      try {
        const [listado, resumenNuevo] = await Promise.all([
          axios.get<RespuestaPaginada>(`${api}/admin/contacts`, {
            headers: cabeceras(),
            params: { gender: lista, page: paginaPedida, limit: POR_PAGINA },
          }),
          axios.get<ResumenDeListas>(`${api}/admin/contacts/summary`, {
            headers: cabeceras(),
          }),
        ]);
        setContactos(listado.data.data);
        setPaginacion({
          totalPages: listado.data.pagination.totalPages,
          totalItems: listado.data.pagination.totalItems,
        });
        setResumen(resumenNuevo.data);
      } catch {
        setError(
          "No se han podido cargar las listas. Vuelve a intentarlo en un momento.",
        );
      } finally {
        setCargando(false);
      }
    },
    [api],
  );

  useEffect(() => {
    void cargar(listaActiva, pagina);
  }, [cargar, listaActiva, pagina]);

  const cambiarLista = (lista: ListaDeGenero) => {
    setListaActiva(lista);
    setPagina(1);
    setAviso(null);
  };

  /**
   * Flechas para moverse entre pestañas, que es lo que espera quien navega por
   * teclado en un `tablist`. Sin esto, el patrón ARIA promete un
   * comportamiento que no está: se anuncia como pestañas pero se recorre como
   * una lista de botones.
   */
  const alPulsarTecla = (e: React.KeyboardEvent, indice: number) => {
    const salto =
      e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : e.key === "Home" ? -indice : e.key === "End" ? LISTAS.length - 1 - indice : 0;
    if (salto === 0) return;

    e.preventDefault();
    const destino = (indice + salto + LISTAS.length) % LISTAS.length;
    cambiarLista(LISTAS[destino].id);
    refsPestanas.current[destino]?.focus();
  };

  const copiarCorreos = async () => {
    setAviso(null);
    try {
      const { data } = await axios.get<{ emails: string[]; total: number }>(
        `${api}/admin/contacts/emails`,
        { headers: cabeceras(), params: { gender: listaActiva } },
      );

      if (data.total === 0) {
        setAviso("Esta lista está vacía: no hay nada que copiar.");
        return;
      }

      const texto = data.emails.join(", ");
      // `navigator.clipboard` solo existe en contextos seguros. Si no está, se
      // dice en vez de fallar en silencio dejando creer que se ha copiado.
      if (!navigator.clipboard) {
        setAviso(
          "Este navegador no deja copiar automáticamente. Usa «Descargar CSV».",
        );
        return;
      }
      await navigator.clipboard.writeText(texto);
      setAviso(
        `Copiados ${data.total} correos al portapapeles, separados por comas. Pégalos en el campo CCO.`,
      );
    } catch {
      setAviso("No se han podido copiar los correos. Prueba con el CSV.");
    }
  };

  const descargarCsv = async () => {
    setAviso(null);
    try {
      const respuesta = await axios.get(`${api}/admin/contacts/export`, {
        headers: cabeceras(),
        params: { gender: listaActiva },
        responseType: "blob",
      });

      const url = URL.createObjectURL(new Blob([respuesta.data]));
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.download = `contactos-${listaActiva}.csv`;
      document.body.appendChild(enlace);
      enlace.click();
      enlace.remove();
      URL.revokeObjectURL(url);
      setAviso("CSV descargado.");
    } catch {
      setAviso("No se ha podido descargar el CSV.");
    }
  };

  const mover = async (
    contacto: ContactoDeLista,
    destino: "mujer" | "hombre",
  ) => {
    setMoviendo(contacto.email);
    setAviso(null);
    try {
      await axios.patch(
        `${api}/admin/contacts/${encodeURIComponent(contacto.email)}/gender`,
        { gender: destino },
        { headers: cabeceras() },
      );
      setAviso(
        `${contacto.nombre} ${contacto.apellidos} está ahora en la lista de ${destino === "mujer" ? "mujeres" : "hombres"}.`,
      );
      // Se recarga en vez de quitar la fila a mano: así los contadores de las
      // pestañas también se actualizan, que es media información de la
      // pantalla.
      await cargar(listaActiva, pagina);
    } catch (e) {
      const mensaje =
        axios.isAxiosError(e) && e.response?.status === 409
          ? // El backend explica que esa persona eligió su género al
            // registrarse. Se muestra tal cual: un "error" genérico aquí
            // parecería una avería en vez de la regla que es.
            (e.response?.data?.message as string)
          : "No se ha podido mover el contacto.";
      setAviso(mensaje);
    } finally {
      setMoviendo(null);
    }
  };

  const listaActual = LISTAS.find((l) => l.id === listaActiva)!;

  return (
    <section className="listas-correo" aria-labelledby="listas-titulo">
      <header className="listas-correo__cabecera">
        <h2 id="listas-titulo" className="listas-correo__titulo">
          Listas de correo
        </h2>
        <p className="listas-correo__intro">
          Todas las personas de la comunidad, vengan del registro de la web o de
          Eventbrite, repartidas por género y sin repetirse.{" "}
          <strong>Quien se ha dado de baja no aparece en ninguna lista.</strong>
        </p>
      </header>

      {resumen && (
        <p className="listas-correo__cobertura">
          <strong>{resumen.total}</strong> contactos en total.{" "}
          <strong>{resumen.porcentajeClasificado}%</strong> están clasificados
          como mujer u hombre.
          {resumen.excluidosPorBaja > 0 && (
            <>
              {" "}
              Se han dejado fuera <strong>{resumen.excluidosPorBaja}</strong>{" "}
              direcciones dadas de baja.
            </>
          )}
        </p>
      )}

      {/*
        Pestañas de verdad: se anuncian como tal y se recorren con las flechas.
        Cada botón lleva su contador en el propio nombre accesible, para que no
        se pierda quien no ve el número.
      */}
      <div
        className="listas-correo__pestanas"
        role="tablist"
        aria-label="Listas de contactos por género"
      >
        {LISTAS.map((lista, indice) => {
          const activa = lista.id === listaActiva;
          const cuantos = resumen?.conteo[lista.id];
          return (
            <button
              key={lista.id}
              ref={(el) => {
                refsPestanas.current[indice] = el;
              }}
              type="button"
              role="tab"
              id={`pestana-${lista.id}`}
              aria-selected={activa}
              aria-controls="panel-lista"
              tabIndex={activa ? 0 : -1}
              className={`listas-correo__pestana${activa ? " listas-correo__pestana--activa" : ""}`}
              onClick={() => cambiarLista(lista.id)}
              onKeyDown={(e) => alPulsarTecla(e, indice)}
            >
              <span className="listas-correo__pestana-nombre">
                {lista.etiqueta}
              </span>
              {typeof cuantos === "number" && (
                <span className="listas-correo__contador">{cuantos}</span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id="panel-lista"
        role="tabpanel"
        aria-labelledby={`pestana-${listaActiva}`}
        tabIndex={0}
        className="listas-correo__panel"
      >
        <p className="listas-correo__ayuda">{listaActual.ayuda}</p>

        <div className="listas-correo__acciones">
          <button
            type="button"
            className="admin-btn admin-btn--primario"
            onClick={() => void copiarCorreos()}
            disabled={cargando || paginacion.totalItems === 0}
          >
            Copiar los {paginacion.totalItems} correos
          </button>
          <button
            type="button"
            className="admin-btn admin-btn--suave"
            onClick={() => void descargarCsv()}
            disabled={cargando || paginacion.totalItems === 0}
          >
            Descargar CSV
          </button>
        </div>

        {/*
          El resultado de copiar, descargar o mover se dice con palabras y no
          solo con un icono que cambia de color: hay que poder saber qué ha
          pasado sin verlo.
        */}
        <p className="listas-correo__aviso" role="status" aria-live="polite">
          {aviso}
        </p>

        {error && (
          <p className="admin-alerta admin-alerta--error" role="alert">
            {error}
          </p>
        )}

        {cargando ? (
          <div className="listas-correo__cargando">
            <Loader2
              className="animate-spin"
              aria-hidden="true"
              style={{ width: 32, height: 32, color: "var(--color-secondary)" }}
            />
            <p>Cargando contactos…</p>
          </div>
        ) : contactos.length === 0 ? (
          <p className="listas-correo__vacio">
            No hay nadie en esta lista.
            {listaActiva === "sin-clasificar" &&
              " Buena señal: significa que se ha podido clasificar a todo el mundo."}
          </p>
        ) : (
          <>
            <AdminTable
              caption={`Contactos de la lista ${listaActual.etiqueta}`}
              columns={[
                { label: "Nombre" },
                { label: "Correo" },
                { label: "Viene de" },
                { label: "Género" },
                { label: "Mover a", align: "center" },
              ]}
            >
              {contactos.map((contacto) => {
                const declarado = contacto.fuente === "declarado";
                const enCurso = moviendo === contacto.email;
                return (
                  <tr key={contacto.email}>
                    <td>
                      {contacto.nombre} {contacto.apellidos}
                    </td>
                    <td>
                      {/* El title lleva el correo entero: en pantalla estrecha
                          se recorta con puntos suspensivos para que quepa la
                          columna de acción. */}
                      <span
                        className="listas-correo__email"
                        title={contacto.email}
                      >
                        {contacto.email}
                      </span>
                    </td>
                    <td>{ETIQUETA_ORIGEN[contacto.origen]}</td>
                    <td>
                      <span
                        className={`admin-badge ${
                          declarado ? "admin-badge--ok" : "admin-badge--neutral"
                        }`}
                      >
                        {ETIQUETA_FUENTE[contacto.fuente]}
                      </span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {declarado ? (
                        /*
                          Sin botón. La columna «Género» de esta misma fila ya
                          dice «Lo eligió ella», así que repetirlo aquí era
                          decir dos veces lo mismo — se veía al mirar la tabla,
                          no al leer el código. Queda un guion, y la
                          explicación para quien no ve la fila entera de un
                          vistazo.
                        */
                        <span
                          className="listas-correo__bloqueado"
                          aria-label="No se puede mover: esta persona eligió su género al registrarse"
                          title="Esta persona eligió su género al registrarse"
                        >
                          —
                        </span>
                      ) : (
                        <span className="listas-correo__mover">
                          {(["mujer", "hombre"] as const)
                            .filter((destino) => destino !== contacto.lista)
                            .map((destino) => (
                              <button
                                key={destino}
                                type="button"
                                className="admin-btn admin-btn--suave listas-correo__mover-btn"
                                disabled={enCurso}
                                onClick={() => void mover(contacto, destino)}
                                aria-label={`Mover a ${contacto.nombre} ${contacto.apellidos} a la lista de ${destino === "mujer" ? "mujeres" : "hombres"}`}
                              >
                                {destino === "mujer" ? "Mujeres" : "Hombres"}
                              </button>
                            ))}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </AdminTable>

            <AdminPagination
              paginaActual={pagina}
              totalPaginas={paginacion.totalPages}
              onCambiar={setPagina}
              totalElementos={paginacion.totalItems}
              nombreElemento="contacto"
              etiqueta={`Paginación de la lista ${listaActual.etiqueta}`}
              deshabilitado={cargando}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default ListasDeCorreo;
