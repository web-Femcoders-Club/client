import { useEffect, useRef } from "react";

/**
 * Al aparecer un mensaje de error/estado, lleva el foco y la vista hasta él
 * para que la usuaria no tenga que buscarlo por el formulario.
 * El elemento debe llevar ref={ref} y tabIndex={-1}.
 */
export function useFocusMessage(active: unknown) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (active && ref.current) {
      ref.current.focus();
      ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [active]);

  return ref;
}
