/*
 * Textos de /eventos, en un solo sitio. Los pintan las secciones de
 * src/features/Events/components. Los eventos no están aquí: llegan de la
 * base de datos (sincronizada con Eventbrite).
 */
import { CIFRAS_COMUNIDAD } from "../../data/cifrasComunidad";
import { REDES_SOCIALES } from "../../data/redesSociales";

export const PRESENTACION_EVENTOS = {
  antetitulo: "FemCoders Club",
  titulo: { texto: "Eventos para mujeres en", destacado: "tecnología" },
  lema: "Encuentros para aprender, conectar, compartir experiencias y crecer juntas.",
  parrafos: [
    "Organizamos eventos presenciales en Barcelona y sesiones online con profesionales del sector: charlas, talleres, encuentros y espacios de networking sobre tecnología, inteligencia artificial, desarrollo profesional, liderazgo y mucho más.",
    `Llevamos más de ${CIFRAS_COMUNIDAD.eventos} eventos creando oportunidades para conectar y seguir creciendo, estés dando tus primeros pasos o lleves años formando parte del sector.`,
  ],
  formatos: ["Charlas", "Talleres", "Encuentros", "Networking"],
  botones: {
    pasados: "Ver eventos pasados",
    ponentes: "Conoce a las ponentes",
  },
};

export const PROXIMOS_EVENTOS = {
  titulo: "Próximos eventos",
  reservar: "Reserva tu plaza",
  sinEventos: {
    titulo: "¡Grandes cosas están por venir!",
    texto:
      "Estamos preparando los próximos encuentros. Síguenos en redes para enterarte la primera cuando abramos inscripciones.",
    redes: [
      { nombre: "Síguenos en LinkedIn", url: REDES_SOCIALES.linkedin },
      { nombre: "Instagram", url: REDES_SOCIALES.instagram },
    ],
  },
};
