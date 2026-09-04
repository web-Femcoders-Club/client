import { useEffect, useState } from "react";

/**
 * El valor, pero esperando a que quien escribe se pare.
 *
 * Los buscadores del panel filtran en el servidor (server#14): sin esto, cada
 * tecla de "garcía" serían seis peticiones, y las respuestas pueden llegar
 * desordenadas y dejar en pantalla el resultado de una búsqueda a medias.
 *
 * 350 ms es el hueco entre teclas de alguien escribiendo de corrido. Menos, y
 * se disparan peticiones de más; mucho más, y la tabla parece congelada.
 */
export function useDebouncedValue<T>(valor: T, milisegundos = 350): T {
  const [diferido, setDiferido] = useState(valor);

  useEffect(() => {
    const temporizador = setTimeout(() => setDiferido(valor), milisegundos);
    return () => clearTimeout(temporizador);
  }, [valor, milisegundos]);

  return diferido;
}
