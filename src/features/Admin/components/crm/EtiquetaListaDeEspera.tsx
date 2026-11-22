import type { EstadoInscripcion } from "../../../../types/types";

/**
 * Marca a quien se quedó en lista de espera (server#150): es comunidad, pero
 * no tuvo plaza ni cuenta como asistente del evento.
 *
 * Es texto y no solo color, para que se entienda también sin ver el tono.
 * #4737bb sobre #f1edff: 7,2:1 (AAA).
 */
const EtiquetaListaDeEspera = ({ estado }: { estado?: EstadoInscripcion }) =>
  estado === "lista_espera" ? (
    <>
      {/* El espacio separa la etiqueta del nombre también para el lector de pantalla. */}{" "}
      <span
        className="ml-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold"
        style={{ color: "#4737bb", background: "#f1edff" }}
      >
        Lista de espera
      </span>
    </>
  ) : null;

export default EtiquetaListaDeEspera;
