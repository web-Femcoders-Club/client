import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

export type TonoTarjeta = 'neutral' | 'alerta' | 'ok';

interface TarjetaResumenProps {
  rotulo: string;
  cifra: number | undefined;
  Icono: LucideIcon;
  /** Ausente en las tarjetas informativas: solo las colas de trabajo llevan a algún sitio. */
  destino?: string;
  /** Frase completa para lector de pantalla. La cifra sola no dice nada. */
  descripcionAccesible?: string;
  /** Texto bajo la cifra. Es lo que hace que el estado de alerta no dependa del color. */
  nota?: string;
  tono?: TonoTarjeta;
  cargando?: boolean;
  fallo?: boolean;
}

/*
 * Tarjeta del resumen del panel.
 *
 * Vive dentro de la carpeta del resumen y no se exporta fuera a propósito: el
 * panel ya convive con varios dialectos de tarjeta y añadir un componente
 * compartido más, con un solo consumidor, sería inventar un sistema para un
 * caso. El día que un tercer sitio la necesite de verdad, se saca de aquí.
 *
 * La caja base (`admin-card`) sí se reutiliza tal cual de admin-ui.css: es
 * vocabulario que ya existe, y usarlo no modifica nada de lo que hay.
 */
const TarjetaResumen: React.FC<TarjetaResumenProps> = ({
  rotulo,
  cifra,
  Icono,
  destino,
  descripcionAccesible,
  nota,
  tono = 'neutral',
  cargando = false,
  fallo = false,
}) => {
  const clases = [
    'admin-card',
    'resumen-tarjeta',
    `resumen-tarjeta--${tono}`,
    destino ? 'resumen-tarjeta--enlace' : '',
  ]
    .filter(Boolean)
    .join(' ');

  /*
   * La cifra en la vista y la frase para lector de pantalla se separan: en
   * pantalla basta el número junto a su rótulo, pero leído en voz alta un «3»
   * suelto no dice de qué ni adónde lleva.
   */
  const contenido = (
    <>
      <div className="resumen-tarjeta__cabecera">
        <p className="resumen-tarjeta__rotulo">{rotulo}</p>
        <span className="resumen-tarjeta__disco" aria-hidden="true">
          <Icono className="resumen-tarjeta__icono" />
        </span>
      </div>
      {fallo ? (
        <p className="resumen-tarjeta__fallo">No se pudo cargar</p>
      ) : (
        <p className="resumen-tarjeta__cifra">
          {cargando || cifra === undefined ? '—' : cifra}
        </p>
      )}
      {nota && !fallo && <p className="resumen-tarjeta__nota">{nota}</p>}
    </>
  );

  if (destino && !fallo) {
    return (
      <Link
        to={destino}
        className={`${clases} admin-focus`}
        aria-label={descripcionAccesible}
        aria-busy={cargando || undefined}
      >
        {contenido}
      </Link>
    );
  }

  return (
    <div className={clases} aria-busy={cargando || undefined}>
      {contenido}
    </div>
  );
};

export default TarjetaResumen;
