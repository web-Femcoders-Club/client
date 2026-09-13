import React, { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Loader2, RotateCcw, Trash2 } from "lucide-react";
import {
  AnotacionDeRegistro,
  CuentaEnPapelera,
  getAccionesDelRegistro,
  getPapelera,
  getRegistro,
  restaurarUsuaria,
} from "../../../../api/registroApi";
import AdminPagination from "../ui/AdminPagination";
import AdminTable from "../ui/AdminTable";
import "./registro.css";

const POR_PAGINA = 25;

/** Cada cuánto se vuelve a pedir el registro sin que nadie toque nada. */
const REFRESCO_MS = 30_000;

/**
 * Cómo se lee cada acción. La clave es la que guarda el backend; el texto, lo
 * que ve una persona.
 *
 * Una acción que no esté aquí se enseña con su clave en crudo en vez de
 * desaparecer: es preferible una fila fea a una fila que falta, sobre todo en
 * un registro cuya razón de ser es que no falte nada.
 */
const TEXTO_DE_ACCION: Record<string, string> = {
  "usuaria.borrada": "Movió una cuenta a la papelera",
  "usuaria.restaurada": "Restauró una cuenta",
  "usuaria.purgada": "Cuenta borrada definitivamente",
  "usuaria.editada": "Editó una cuenta",
  "usuaria.rol-cambiado": "Cambió el rol de una cuenta",
  "email.dado-de-baja": "Dio de baja un email",
  "patrocinador.borrado": "Borró un patrocinador",
  "crm.sincronizado": "Sincronizó el CRM",
};

/** Las que conviene que salten a la vista al repasar el registro. */
const ACCIONES_SENSIBLES = new Set([
  "usuaria.borrada",
  "usuaria.purgada",
  "usuaria.rol-cambiado",
  "email.dado-de-baja",
]);

const formatearFecha = (iso: string): string =>
  new Date(iso).toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

/**
 * Quién hizo qué en el panel, y la papelera de cuentas borradas.
 *
 * Las dos cosas viven en la misma pantalla porque se consultan por el mismo
 * motivo: alguien echa algo en falta y quiere saber qué pasó. Separarlas
 * obligaría a mirar en dos sitios para responder a una sola pregunta.
 *
 * Se refresca solo cada 30 segundos. Con varias administradoras trabajando a la
 * vez, un registro que hay que recargar a mano enseña un pasado reciente sin
 * avisar de que lo es.
 */
const RegistroDeActividad: React.FC = () => {
  const [pagina, setPagina] = useState(1);
  const [accion, setAccion] = useState<string>("");
  const [aviso, setAviso] = useState<string>("");
  const queryClient = useQueryClient();

  const registro = useQuery({
    queryKey: ["registro", pagina, accion],
    queryFn: () => getRegistro(pagina, POR_PAGINA, accion || undefined),
    refetchInterval: REFRESCO_MS,
    // Mantener la página anterior mientras llega la nueva evita que la tabla
    // parpadee a vacío en cada refresco automático.
    placeholderData: (anterior) => anterior,
  });

  const acciones = useQuery({
    queryKey: ["registro-acciones"],
    queryFn: getAccionesDelRegistro,
  });

  const papelera = useQuery({
    queryKey: ["papelera"],
    queryFn: getPapelera,
    refetchInterval: REFRESCO_MS,
  });

  const restaurar = useMutation({
    mutationFn: restaurarUsuaria,
    onSuccess: async (_, idUser) => {
      const cuenta = papelera.data?.find((c) => c.idUser === idUser);
      setAviso(
        cuenta
          ? `Cuenta de ${cuenta.userName} ${cuenta.userLastName} restaurada.`
          : "Cuenta restaurada."
      );
      // Las dos listas cambian a la vez: la cuenta sale de la papelera y la
      // restauración entra en el registro.
      await queryClient.invalidateQueries({ queryKey: ["papelera"] });
      await queryClient.invalidateQueries({ queryKey: ["registro"] });
    },
    onError: () => {
      setAviso(
        "No se pudo restaurar la cuenta. Puede que ya se haya purgado por haber pasado las 48 horas."
      );
    },
  });

  const cambiarFiltro = (valor: string) => {
    setAccion(valor);
    // Sin volver a la primera página, filtrar desde la página 4 puede dejar una
    // tabla vacía que parece un error y no lo es.
    setPagina(1);
  };

  return (
    <section className="registro">
      <header className="registro__cabecera">
        <h1 className="registro__titulo">Registro de actividad</h1>
        <p className="registro__intro">
          Qué ha hecho cada administradora en el panel. Se actualiza solo cada
          30 segundos y se conserva doce meses.
        </p>
      </header>

      {aviso && (
        <p className="registro__aviso" role="status">
          {aviso}
        </p>
      )}

      {/* ── Papelera ── */}
      <section className="registro__bloque" aria-labelledby="papelera-titulo">
        <h2 id="papelera-titulo" className="registro__subtitulo">
          <Trash2 size={18} aria-hidden="true" />
          Papelera
        </h2>

        {papelera.isLoading ? (
          <p className="registro__cargando">
            <Loader2 className="registro__spinner" size={16} aria-hidden="true" />
            Cargando la papelera…
          </p>
        ) : papelera.data && papelera.data.length > 0 ? (
          <>
            <p className="registro__intro">
              Estas cuentas están borradas y se pueden recuperar. Pasadas 48
              horas desde el borrado se van definitivamente y ya no hay vuelta
              atrás.
            </p>
            <AdminTable
              caption="Cuentas borradas que todavía se pueden restaurar"
              columns={[
                "Cuenta",
                "Email",
                "Borrada el",
                "Le quedan",
                { label: "", align: "right" },
              ]}
            >
              {papelera.data.map((cuenta: CuentaEnPapelera) => (
                <tr key={cuenta.idUser}>
                  <td>
                    {cuenta.userName} {cuenta.userLastName}
                  </td>
                  <td>{cuenta.userEmail}</td>
                  <td>{formatearFecha(cuenta.borradaEn)}</td>
                  <td>
                    <span
                      className={
                        cuenta.horasRestantes <= 6
                          ? "registro__horas registro__horas--poco"
                          : "registro__horas"
                      }
                    >
                      {cuenta.horasRestantes === 0
                        ? "menos de 1 hora"
                        : `${cuenta.horasRestantes} h`}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      className="registro__boton"
                      onClick={() => restaurar.mutate(cuenta.idUser)}
                      disabled={restaurar.isPending}
                    >
                      <RotateCcw size={15} aria-hidden="true" />
                      Restaurar
                      <span className="sr-only">
                        {" "}
                        la cuenta de {cuenta.userName} {cuenta.userLastName}
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </AdminTable>
          </>
        ) : (
          <p className="registro__vacio">
            La papelera está vacía: no hay ninguna cuenta borrada pendiente de
            purgarse.
          </p>
        )}
      </section>

      {/* ── Registro ── */}
      <section className="registro__bloque" aria-labelledby="historial-titulo">
        <div className="registro__barra">
          <h2 id="historial-titulo" className="registro__subtitulo">
            Historial
          </h2>

          <label className="registro__filtro">
            <span>Filtrar por acción</span>
            <select
              value={accion}
              onChange={(e) => cambiarFiltro(e.target.value)}
            >
              <option value="">Todas</option>
              {(acciones.data ?? []).map((valor) => (
                <option key={valor} value={valor}>
                  {TEXTO_DE_ACCION[valor] ?? valor}
                </option>
              ))}
            </select>
          </label>
        </div>

        {registro.isLoading ? (
          <p className="registro__cargando">
            <Loader2 className="registro__spinner" size={16} aria-hidden="true" />
            Cargando el registro…
          </p>
        ) : registro.isError ? (
          <p className="registro__error" role="alert">
            No se pudo cargar el registro. Vuelve a intentarlo en un momento.
          </p>
        ) : registro.data && registro.data.filas.length > 0 ? (
          <>
            <AdminTable
              caption="Acciones realizadas en el panel, de la más reciente a la más antigua"
              columns={["Cuándo", "Quién", "Qué hizo", "Sobre quién"]}
            >
              {registro.data.filas.map((fila: AnotacionDeRegistro) => (
                <tr
                  key={fila.id}
                  className={
                    ACCIONES_SENSIBLES.has(fila.accion)
                      ? "registro__fila registro__fila--sensible"
                      : "registro__fila"
                  }
                >
                  <td className="registro__fecha">
                    {formatearFecha(fila.creadoEn)}
                  </td>
                  <td>
                    {fila.autorNombre}
                    {fila.autorEmail && (
                      <span className="registro__secundario">
                        {fila.autorEmail}
                      </span>
                    )}
                  </td>
                  <td>
                    {TEXTO_DE_ACCION[fila.accion] ?? fila.accion}
                    {fila.detalle && (
                      <span className="registro__secundario">
                        {fila.detalle}
                      </span>
                    )}
                  </td>
                  <td>
                    {fila.objetivoNombre ?? fila.objetivoEmail ?? "—"}
                    {fila.objetivoNombre && fila.objetivoEmail && (
                      <span className="registro__secundario">
                        {fila.objetivoEmail}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </AdminTable>

            <AdminPagination
              paginaActual={registro.data.pagina}
              totalPaginas={registro.data.totalPaginas}
              onCambiar={setPagina}
              totalElementos={registro.data.total}
              nombreElemento="anotación"
              etiqueta="Paginación del registro de actividad"
              deshabilitado={registro.isFetching}
            />
          </>
        ) : (
          <p className="registro__vacio">
            {accion
              ? "No hay ninguna anotación de ese tipo todavía."
              : "Todavía no hay nada anotado."}
          </p>
        )}
      </section>
    </section>
  );
};

export default RegistroDeActividad;
