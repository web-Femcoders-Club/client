import { Pause, Play } from "lucide-react";

/*
 * Botón para detener o reanudar el avance automático de un carrusel. El
 * nombre accesible dice la acción y cambia con ella (patrón de carrusel de
 * WAI-ARIA), por eso no lleva `aria-pressed`.
 */
const BotonRotacion: React.FC<{
  girando: boolean;
  alAlternar: () => void;
  /** Qué carrusel controla, para el nombre accesible: «noticias», «proyectos». */
  de: string;
  controla: string;
}> = ({ girando, alAlternar, de, controla }) => (
  <button
    type="button"
    className="fc-boton-redondo fc-boton-rotacion"
    onClick={alAlternar}
    aria-label={girando ? `Detener el carrusel de ${de}` : `Reanudar el carrusel de ${de}`}
    aria-controls={controla}
    title={girando ? "Detener" : "Reanudar"}
  >
    {girando ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
  </button>
);

export default BotonRotacion;
