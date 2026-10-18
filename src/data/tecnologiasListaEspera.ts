import { TecnologiaListaEspera } from "../types/types";

/**
 * Catálogo de tecnologías de la lista de espera (server#147), con el nombre que
 * se pinta. Lo usan el formulario de /welcome y el panel: los nombres son los
 * mismos en los dos sitios, así que viven en uno.
 *
 * El orden es el del formulario. «Otra» va al final y abre un campo para decir
 * cuál.
 */
export const TECNOLOGIAS_LISTA_ESPERA: {
  valor: TecnologiaListaEspera;
  texto: string;
}[] = [
  { valor: "html-css", texto: "HTML y CSS" },
  { valor: "javascript", texto: "JavaScript" },
  { valor: "typescript", texto: "TypeScript" },
  { valor: "react", texto: "React" },
  { valor: "angular", texto: "Angular" },
  { valor: "vue", texto: "Vue" },
  { valor: "node", texto: "Node.js" },
  { valor: "python", texto: "Python" },
  { valor: "java", texto: "Java" },
  { valor: "php", texto: "PHP" },
  { valor: "sql", texto: "SQL y bases de datos" },
  { valor: "ux-ui", texto: "Diseño UX/UI" },
  { valor: "testing", texto: "Testing y QA" },
  { valor: "devops-cloud", texto: "DevOps y cloud" },
  { valor: "datos-ia", texto: "Datos e IA" },
  { valor: "otra", texto: "Otra" },
];

const POR_VALOR = new Map<string, string>(
  TECNOLOGIAS_LISTA_ESPERA.map(({ valor, texto }) => [valor, texto])
);

/** Nombre legible; si llega un valor desconocido, se muestra tal cual. */
export const nombreDeTecnologia = (valor: string) =>
  POR_VALOR.get(valor) ?? valor;

export const LARGO_IDEA = 500;
export const LARGO_OTRA_TECNOLOGIA = 60;
