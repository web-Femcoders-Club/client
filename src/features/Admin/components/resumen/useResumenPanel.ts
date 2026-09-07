import { useQuery } from "@tanstack/react-query";
import {
  getCrmStats,
  getPendingUnsubscribes,
  getResumenContactos,
  getUserStats,
} from "../../../../api/adminApi";
import { getPendingComments } from "../../../../api/commentApi";
import { clavesResumen } from "./clavesResumen";

/*
 * Cuánto se considera fresco un dato del resumen.
 *
 * Va aquí y no en el QueryClient de App.tsx a propósito: ese cliente lo
 * comparten la home, Equipo y Eventos, y cambiarle los valores por defecto
 * sería tocar el cacheo de tres páginas públicas para arreglar el panel.
 */
const TIEMPO_FRESCO = 30_000;

/**
 * Días transcurridos desde una fecha ISO.
 *
 * Devuelve null si la fecha no se puede interpretar: es preferible no pintar el
 * aviso de plazo a pintar uno calculado sobre un NaN.
 */
const diasDesde = (iso: string): number | null => {
  const fecha = new Date(iso).getTime();
  if (Number.isNaN(fecha)) return null;
  return Math.floor((Date.now() - fecha) / 86_400_000);
};

/*
 * A partir de cuántos días una baja sin procesar pasa a estado de alerta.
 *
 * El RGPD da un mes para atender una solicitud de baja. Quince días deja margen
 * para reaccionar antes de incumplir, en lugar de avisar cuando ya es tarde.
 */
const DIAS_PARA_ALERTA = 15;

/**
 * Las cinco consultas del resumen.
 *
 * Son cinco `useQuery` independientes y no un `useQueries` porque cada tarjeta
 * debe poder fallar sola: si el CRM está caído, las colas de trabajo siguen
 * viéndose. Un único estado de error compartido convertiría un fallo parcial en
 * una pantalla vacía.
 */
export const useResumenPanel = () => {
  const comentarios = useQuery({
    queryKey: clavesResumen.comentariosPendientes,
    queryFn: () => getPendingComments(),
    staleTime: TIEMPO_FRESCO,
  });

  const bajas = useQuery({
    queryKey: clavesResumen.bajasPendientes,
    queryFn: getPendingUnsubscribes,
    staleTime: TIEMPO_FRESCO,
  });

  const contactos = useQuery({
    queryKey: clavesResumen.resumenContactos,
    queryFn: getResumenContactos,
    staleTime: TIEMPO_FRESCO,
  });

  const usuarias = useQuery({
    queryKey: clavesResumen.stats,
    queryFn: getUserStats,
    staleTime: TIEMPO_FRESCO,
  });

  const crm = useQuery({
    queryKey: clavesResumen.crmStats,
    queryFn: getCrmStats,
    staleTime: TIEMPO_FRESCO,
  });

  /*
   * Días que lleva esperando la solicitud de baja más antigua. Null cuando no
   * hay cola, cuando aún no ha cargado o cuando ninguna fecha es legible.
   */
  const esperaMasLarga = (() => {
    const pendientes = bajas.data;
    if (!pendientes?.length) return null;
    const dias = pendientes
      .map((registro) => diasDesde(registro.requestedAt))
      .filter((d): d is number => d !== null);
    return dias.length ? Math.max(...dias) : null;
  })();

  const bajasEnAlerta =
    esperaMasLarga !== null && esperaMasLarga >= DIAS_PARA_ALERTA;

  /*
   * «Todo al día» solo si las tres colas han respondido y las tres están a
   * cero. Con una consulta fallida no se sabe, y afirmar que no hay trabajo
   * pendiente cuando no se ha podido comprobar es peor que no decir nada.
   */
  const colasVacias =
    comentarios.isSuccess &&
    bajas.isSuccess &&
    contactos.isSuccess &&
    comentarios.data.length === 0 &&
    bajas.data.length === 0 &&
    contactos.data.conteo["sin-clasificar"] === 0;

  return {
    comentarios,
    bajas,
    contactos,
    usuarias,
    crm,
    esperaMasLarga,
    bajasEnAlerta,
    colasVacias,
  };
};
