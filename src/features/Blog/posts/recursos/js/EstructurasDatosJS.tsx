import React from "react";
import { Helmet } from "react-helmet";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaBook,
  FaBolt,
  FaCheck,
  FaDatabase,
  FaExclamationTriangle,
  FaFilter,
  FaGithub,
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaSlack,
  FaTiktok,
  FaTools,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CommentsSection from "../../../../Blog/components/CommentsSection";
import "../../../page/PostStyles.css";

const EstructurasDatosJS: React.FC = () => {
  const postId = 38;
  const publicationDate = "25 de abril de 2026";
  const currentUrl =
    "https://www.femcodersclub.com/recursos/js/estructuras-datos-js";

  return (
    <article className="blog-post">
      <Helmet>
        <title>
          Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y
          WeakSet | femCoders Club
        </title>
        <meta
          name="description"
          content="Aprende cuándo usar Map, Set, WeakMap y WeakSet en JavaScript. Proyecto práctico: LRU Cache con Map, el mismo ejercicio que Google, Meta y Amazon usan en entrevistas técnicas."
        />
        <meta
          name="keywords"
          content="Map javascript, Set javascript, WeakMap, WeakSet, LRU Cache javascript, estructuras de datos javascript, entrevistas técnicas javascript, femcoders club"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y WeakSet | femCoders Club"
        />
        <meta
          property="og:description"
          content="Map, Set, WeakMap y WeakSet: cuándo usar cada estructura y por qué importa. Proyecto práctico: LRU Cache con Map, el mismo ejercicio de entrevistas de Google, Meta y Amazon."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/javascript/estructuras-datos-js.webp"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Estructuras de Datos Avanzadas en JavaScript - femCoders Club"
        />
        <meta
          name="twitter:description"
          content="Map, Set, WeakMap y WeakSet en JavaScript: cuándo usar cada una y proyecto práctico LRU Cache."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/javascript/estructuras-datos-js.webp"
        />

        <meta property="article:published_time" content="2026-04-25T10:00:00Z" />
        <meta property="article:author" content="femCoders Club" />
        <meta property="article:section" content="Desarrollo Web" />
        <meta property="article:tag" content="JavaScript" />
        <meta property="article:tag" content="Map" />
        <meta property="article:tag" content="Set" />
        <meta property="article:tag" content="WeakMap" />
        <meta property="article:tag" content="Estructuras de Datos" />
        <meta property="article:tag" content="LRU Cache" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Spanish" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Helmet>

      {/* ── Hero image ── */}
      <div className="post-image-container">
        <picture>
          <source
            srcSet="/public-optimized/mobile/assets/javascript/estructuras-datos-js.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public-optimized/desktop/assets/javascript/estructuras-datos-js.webp"
            media="(min-width: 769px)"
          />
          <img
            src="/public-optimized/desktop/assets/javascript/estructuras-datos-js.webp"
            alt="Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y WeakSet"
            className="blog-post-image"
            loading="lazy"
          />
        </picture>
      </div>

      <h1 className="blog-post-title">
        Estructuras de Datos Avanzadas en JavaScript
        <br />
        Map, Set, WeakMap y WeakSet
      </h1>

      <div className="social-share">
        <div className="share-buttons">
          <a
            href="https://communityinviter.com/apps/femcodersclub/femcoders-club"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirse a Slack"
          >
            <FaSlack className="social-icon" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Instagram"
          >
            <BsInstagram className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en LinkedIn"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href={`https://twitter.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Twitter"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
          <a
            href={`https://www.tiktok.com/share?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      {/* ── Intro ── */}
      <section aria-labelledby="intro-section">
        <h2 id="intro-section" className="visually-hidden">
          Introducción
        </h2>
        <p className="intro-text">
          Si llevas un tiempo programando en JavaScript, probablemente usas
          objetos y arrays para casi todo. Son versátiles, los conoces bien y
          funcionan. Pero hay situaciones en las que estás eligiendo la
          herramienta equivocada sin saberlo, y eso tiene un coste real:{" "}
          <strong>código más lento, más propenso a errores y más difícil de mantener</strong>.
        </p>
        <p className="intro-text">
          En este post vemos las estructuras de datos que JavaScript ofrece más
          allá de los objetos y arrays clásicos: <code>Map</code>,{" "}
          <code>Set</code>, <code>WeakMap</code> y <code>WeakSet</code>. Al
          final enlazamos con el proyecto práctico de la serie: un{" "}
          <strong>LRU Cache</strong> implementado con <code>Map</code>, el mismo
          ejercicio que Google, Meta y Amazon utilizan en sus entrevistas
          técnicas.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { icon: <FaDatabase />, label: "Map", color: "#4737bb" },
            { icon: <FaFilter />, label: "Set", color: "#6d2c95" },
            { icon: <FaLeaf />, label: "WeakMap", color: "#ea4f33" },
            { icon: <FaLeaf />, label: "WeakSet", color: "#4737bb" },
          ].map(({ icon, label, color }) => (
            <div
              key={label}
              style={{
                background: "#fff",
                border: `2px solid ${color}`,
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                color,
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── 1. Map ── */}
      <section aria-labelledby="map-section">
        <div className="highlight-box">
          <h2 id="map-section">
            <FaDatabase
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            1. Map: el Object que debería haber existido desde el principio
          </h2>
          <br />
          <p>
            Un <code>Map</code> es una colección de pares clave-valor, igual que
            un objeto. Las diferencias están en los detalles, y esos detalles
            importan.
          </p>

          <h3>Qué puede hacer Map que Object no puede</h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "16px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "top",
                  marginTop: "3px",
                }}
              />
              <strong>Las keys pueden ser de cualquier tipo.</strong> En un
              objeto, las claves son siempre strings o Symbols. Si pasas
              cualquier otra cosa, JavaScript la convierte a string
              automáticamente, lo que provoca comportamientos inesperados. Con{" "}
              <code>Map</code> esto no ocurre: puedes usar objetos, funciones,
              números o cualquier otro tipo como clave y el comportamiento
              siempre es el esperado.
            </li>
            <li style={{ marginBottom: "16px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "top",
                  marginTop: "3px",
                }}
              />
              <strong>El orden de inserción está garantizado.</strong> Los
              objetos tienen un orden de iteración que puede sorprenderte: las
              keys numéricas se ordenan primero, en orden numérico,
              independientemente de cuándo las insertaste. Los <code>Map</code>{" "}
              siempre iteran en el orden en que se insertaron los elementos, sin
              excepciones.
            </li>
            <li style={{ marginBottom: "16px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "top",
                  marginTop: "3px",
                }}
              />
              <strong>La API es más limpia y directa.</strong> Con{" "}
              <code>Map</code> tienes <code>.size</code> para saber cuántos
              elementos hay sin iterar, <code>.has()</code> para comprobar
              existencia, y métodos de iteración nativos como{" "}
              <code>.keys()</code>, <code>.values()</code> y{" "}
              <code>.entries()</code>. Nada de <code>Object.keys()</code>,{" "}
              <code>Object.entries()</code> ni <code>hasOwnProperty()</code>.
            </li>
          </ul>

          <div className="code-block bg3">
            <pre>
              {`// Object: la key [object Object] sobreescribe todo
const obj = {};
const keyA = { id: 1 };
const keyB = { id: 2 };
obj[keyA] = "valor A";
obj[keyB] = "valor B"; // sobreescribe keyA
console.log(obj); // { '[object Object]': 'valor B' } ✗

// Map: cada objeto es una key distinta
const map = new Map();
map.set(keyA, "valor A");
map.set(keyB, "valor B");
console.log(map.get(keyA)); // "valor A" ✓
console.log(map.get(keyB)); // "valor B" ✓
console.log(map.size);      // 2 ✓`}
            </pre>
          </div>

          <br />
          <h3>Cuándo usar Map en lugar de Object</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(71, 55, 187, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #4737bb",
              }}
            >
              <p style={{ margin: "0 0 8px", color: "#2a2170", fontWeight: 700 }}>
                Usa Map cuando…
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#2a2170" }}>
                <li>Las keys no son strings simples conocidos de antemano</li>
                <li>
                  Necesitas saber el número de elementos directamente con{" "}
                  <code>.size</code>
                </li>
                <li>El orden de inserción importa</li>
                <li>Harás muchas inserciones y eliminaciones dinámicas</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "rgba(109, 44, 149, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #6d2c95",
              }}
            >
              <p style={{ margin: "0 0 8px", color: "#2a2170", fontWeight: 700 }}>
                Sigue con Object cuando…
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#2a2170" }}>
                <li>
                  Representas una estructura con propiedades conocidas y fijas
                  (usuario, producto, configuración)
                </li>
                <li>Necesitas serializar a JSON fácilmente</li>
                <li>Usas los datos como namespace</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Set ── */}
      <section aria-labelledby="set-section">
        <div className="highlight-box">
          <h2 id="set-section">
            <FaFilter
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            2. Set: cuando los duplicados no tienen cabida
          </h2>
          <br />
          <p>
            <code>Set</code> es una colección de valores únicos. Sin keys, sin
            pares. Solo valores, garantizando que no hay repetidos.
          </p>

          <h3>Eliminar duplicados, la operación más común</h3>
          <p>
            La situación más habitual es tener un array con valores repetidos y
            necesitar limpiarlo. Con <code>Set</code> se resuelve en una sola
            línea: se crea un <code>Set</code> a partir del array y se vuelve a
            convertir en array. El resultado es el array original sin
            duplicados, manteniendo el orden de primera aparición.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const tecnologias = ['React', 'JS', 'React', 'CSS', 'JS', 'React'];

// Sin Set: hay que iterar manualmente
const unicas = tecnologias.filter((v, i) => tecnologias.indexOf(v) === i);

// Con Set: una línea
const unicasSet = [...new Set(tecnologias)];
// ['React', 'JS', 'CSS'] — orden de primera aparición garantizado ✓`}
            </pre>
          </div>

          <br />
          <h3>Operaciones de conjuntos</h3>
          <p>
            <code>Set</code> hace que las operaciones matemáticas de conjuntos
            sean sencillas de implementar.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Unión: todos los valores de ambas sin repetir
const union = new Set([...a, ...b]);
// {1, 2, 3, 4, 5, 6}

// Intersección: solo los que están en ambas
const interseccion = new Set([...a].filter(x => b.has(x)));
// {3, 4}

// Diferencia: lo que está en A pero no en B
const diferencia = new Set([...a].filter(x => !b.has(x)));
// {1, 2}`}
            </pre>
          </div>

          <p>
            Estas operaciones son especialmente útiles cuando trabajas con
            conjuntos de permisos, tecnologías, categorías o cualquier colección
            donde la unicidad tiene sentido semántico.
          </p>

          <br />
          <h3>Set vs Array: cuándo importa el rendimiento</h3>
          <p>
            Para búsquedas, <code>Set</code> es significativamente más rápido
            que <code>Array</code>. <code>Array.includes()</code> recorre el
            array entero en el peor caso (complejidad O(n)).{" "}
            <code>Set.has()</code> es O(1): acceso directo, sin importar cuántos
            elementos haya.
          </p>
          <p>
            Con colecciones pequeñas la diferencia es inapreciable. Con
            colecciones grandes (miles o cientos de miles de elementos) y
            búsquedas frecuentes, la diferencia es enorme.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(71, 55, 187, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #4737bb",
              }}
            >
              <p style={{ margin: "0 0 8px", color: "#2a2170", fontWeight: 700 }}>
                Usa Set cuando…
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#2a2170" }}>
                <li>Necesitas garantizar unicidad</li>
                <li>
                  Harás muchas búsquedas con <code>.has()</code>
                </li>
                <li>Necesitas operaciones de conjuntos</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "rgba(109, 44, 149, 0.08)",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #6d2c95",
              }}
            >
              <p style={{ margin: "0 0 8px", color: "#2a2170", fontWeight: 700 }}>
                Sigue con Array cuando…
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#2a2170" }}>
                <li>Necesitas acceso por índice</li>
                <li>
                  Usas <code>map</code>, <code>filter</code> o{" "}
                  <code>reduce</code>
                </li>
                <li>
                  El orden importa y puede haber duplicados con significado
                  propio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WeakMap y WeakSet ── */}
      <section aria-labelledby="weak-section">
        <div className="highlight-box">
          <h2 id="weak-section">
            <FaLeaf
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            3. WeakMap y WeakSet: estructuras que no retienen memoria
          </h2>
          <br />
          <p>
            Aquí la cosa se pone más técnica, pero merece la pena entenderlo
            porque explica por qué existen estas estructuras.
          </p>

          <h3>El problema: referencias y memoria</h3>
          <p>
            Cuando guardas un objeto en un <code>Map</code>, ese{" "}
            <code>Map</code> mantiene una <strong>referencia fuerte</strong> a
            ese objeto. Aunque en el resto del código ese objeto ya no se use,
            el Garbage Collector no puede eliminarlo porque el <code>Map</code>{" "}
            sigue apuntando a él. Esto puede provocar fugas de memoria en
            aplicaciones de larga ejecución.
          </p>

          <h3>WeakMap: referencias débiles</h3>
          <p>
            <code>WeakMap</code> resuelve esto. Sus referencias a las keys son{" "}
            <em>débiles</em>: no impiden que el Garbage Collector elimine el
            objeto si ya no hay otras referencias a él en el código. Cuando el
            objeto "muere", su entrada en el <code>WeakMap</code> desaparece
            automáticamente.
          </p>
          <p>
            Las restricciones de <code>WeakMap</code> son consecuencia directa
            de cómo funciona el GC: las keys solo pueden ser objetos (no
            primitivos), no se puede iterar sobre él y no tiene{" "}
            <code>.size</code>. Si pudieras iterar, necesitarías mantener una
            lista de qué objetos están vivos, lo que requeriría referencias
            fuertes y anularía el propósito.
          </p>

          <h3>Casos de uso reales de WeakMap</h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "16px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "top",
                  marginTop: "3px",
                }}
              />
              <strong>Metadata privada de instancias de clase.</strong> Los datos
              viven en el <code>WeakMap</code>, fuera del objeto, y son
              inaccesibles desde fuera de la clase. Cuando la instancia deja de
              usarse, el GC la elimina junto con su metadata.
            </li>
            <li style={{ marginBottom: "16px" }}>
              <FaCheck
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "var(--color-primary)",
                  verticalAlign: "top",
                  marginTop: "3px",
                }}
              />
              <strong>Caché temporal ligado al ciclo de vida de un objeto.</strong>{" "}
              Si tienes un cálculo costoso que depende de un elemento del DOM,
              puedes cachear el resultado en un <code>WeakMap</code> usando el
              elemento como key. Cuando el elemento se elimina del DOM y el GC
              lo recoge, la entrada del caché desaparece sola, sin que tengas
              que gestionar la limpieza manualmente.
            </li>
          </ul>

          <div className="code-block bg3">
            <pre>
              {`// Metadata privada con WeakMap
const _privado = new WeakMap();

class Usuario {
  constructor(nombre, email) {
    // Los datos privados viven fuera del objeto
    _privado.set(this, { nombre, email, loginCount: 0 });
  }

  login() {
    const datos = _privado.get(this);
    datos.loginCount++;
    return datos.loginCount;
  }

  getNombre() {
    return _privado.get(this).nombre;
  }
}

const user = new Usuario('Ana', 'ana@example.com');
user.login();
console.log(user.getNombre()); // 'Ana' ✓
console.log(user._privado);    // undefined — inaccesible ✓`}
            </pre>
          </div>

          <br />
          <h3>WeakSet: lo mismo pero para conjuntos</h3>
          <p>
            <code>WeakSet</code> es a <code>Set</code> lo que{" "}
            <code>WeakMap</code> es a <code>Map</code>. Solo acepta objetos, no
            es iterable y no retiene referencias.
          </p>
          <p>
            El caso de uso más habitual es{" "}
            <strong>marcar objetos como procesados</strong> sin modificarlos ni
            crear referencias fuertes. Si tienes un sistema de eventos y quieres
            asegurarte de que cada evento se procesa una sola vez, puedes
            añadirlo al <code>WeakSet</code> tras procesarlo. Cuando el evento
            ya no se use en ningún otro sitio, el GC lo elimina y el{" "}
            <code>WeakSet</code> no lo retiene.
          </p>

          <div className="code-block bg3">
            <pre>
              {`const procesados = new WeakSet();

function procesarEvento(evento) {
  if (procesados.has(evento)) {
    console.log('Ya procesado, ignorando');
    return;
  }

  // Procesar...
  procesados.add(evento);
  console.log('Evento procesado');
}

const e = { tipo: 'click', timestamp: Date.now() };
procesarEvento(e); // "Evento procesado"
procesarEvento(e); // "Ya procesado, ignorando"
// Cuando 'e' ya no tenga referencias, el GC lo eliminará
// junto con su entrada en el WeakSet — sin memoria retenida`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── 4. Comparativa ── */}
      <section aria-labelledby="comparativa-section">
        <div className="highlight-box">
          <h2 id="comparativa-section">
            <FaBolt
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            4. Comparativa rápida
          </h2>
          <br />

          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "rgba(71, 55, 187, 0.1)" }}>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      borderBottom: "2px solid #4737bb",
                      color: "#2a2170",
                    }}
                  ></th>
                  {["`Map`", "`Object`", "`Set`", "`Array`"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        borderBottom: "2px solid #4737bb",
                        color: "#2a2170",
                      }}
                    >
                      <code>{h.replace(/`/g, "")}</code>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Keys de cualquier tipo", "✓", "✗", "—", "—"],
                  ["Orden garantizado", "✓", "Parcial", "✓", "✓"],
                  [".size directo", "✓", "✗", "✓", ".length"],
                  ["Búsqueda", "O(1)", "O(1)", "O(1)", "O(n)"],
                  ["Unicidad de valores", "✗", "Keys únicas", "✓", "✗"],
                  ["Iterable nativo", "✓", "Con helpers", "✓", "✓"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "#fff" : "rgba(71, 55, 187, 0.03)",
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "10px 16px",
                          borderBottom: "1px solid rgba(71, 55, 187, 0.15)",
                          textAlign: j === 0 ? "left" : "center",
                          color:
                            cell === "✓"
                              ? "#4737bb"
                              : cell === "✗"
                              ? "#ea4f33"
                              : "#2a2170",
                          fontWeight: j === 0 ? 600 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "rgba(109, 44, 149, 0.1)" }}>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      borderBottom: "2px solid #6d2c95",
                      color: "#2a2170",
                    }}
                  ></th>
                  {["`WeakMap`", "`WeakSet`"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        borderBottom: "2px solid #6d2c95",
                        color: "#2a2170",
                      }}
                    >
                      <code>{h.replace(/`/g, "")}</code>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Keys/valores permitidos", "Solo objetos", "Solo objetos"],
                  ["Retiene referencias", "No", "No"],
                  ["Iterable", "No", "No"],
                  [".size", "No", "No"],
                  ["Uso típico", "Caché, datos privados", "Marcar objetos"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "#fff" : "rgba(109, 44, 149, 0.03)",
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "10px 16px",
                          borderBottom: "1px solid rgba(109, 44, 149, 0.15)",
                          textAlign: j === 0 ? "left" : "center",
                          color: "#2a2170",
                          fontWeight: j === 0 ? 600 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. Proyecto LRU Cache ── */}
      <section aria-labelledby="proyecto-section">
        <div className="highlight-box">
          <h2 id="proyecto-section">
            <FaRocket
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            5. Proyecto: LRU Cache con Map
          </h2>
          <br />
          <p>
            Ahora que entiendes <code>Map</code> y su orden de inserción
            garantizado, tiene sentido construir el proyecto práctico de este
            post.
          </p>
          <p>
            Un <strong>LRU Cache</strong> (Least Recently Used) es un caché con
            límite de tamaño. Cuando está lleno y llega un elemento nuevo,
            elimina el que lleva más tiempo sin usarse. Es un patrón que
            utilizan Redis, los navegadores web, los sistemas operativos y
            prácticamente cualquier sistema que necesite gestionar memoria de
            forma inteligente.
          </p>

          <div
            style={{
              backgroundColor: "rgba(71, 55, 187, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "2rem",
              borderLeft: "4px solid #4737bb",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170", fontWeight: 600 }}>
              <FaRocket
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "#ea4f33",
                  verticalAlign: "middle",
                }}
              />
              La pregunta "implementa un LRU Cache" aparece en entrevistas
              técnicas de Google, Meta y Amazon porque combina conocimiento de
              estructuras de datos con pensamiento algorítmico real. No es un
              ejercicio teórico: es un problema que existe en producción.{" "}
              <a
                href="https://github.com/femcodersclub/lru-cache-js"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Puedes ver nuestra implementación en GitHub.
              </a>
            </p>
          </div>

          <h3>Por qué Map es la estructura perfecta para esto</h3>
          <p>
            Para implementar un LRU Cache necesitamos dos cosas: saber en todo
            momento cuál es el elemento menos recientemente usado, y poder
            acceder a cualquier elemento en O(1). <code>Map</code> cumple ambas
            condiciones: mantiene el orden de inserción (el primero siempre es
            el LRU, el último el MRU) y el acceso es directo. Cuando se accede
            a un elemento, basta con eliminarlo e insertarlo de nuevo al final
            para que pase a ser el MRU.
          </p>

          <div className="code-block bg3">
            <pre>
              {`class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // El orden de inserción es nuestra estructura
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // Mover al final = marcar como MRU
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Quitar de su posición actual
    } else if (this.cache.size >= this.capacity) {
      // Eliminar el LRU: primer elemento del Map
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
    this.cache.set(key, value); // Insertar al final = MRU
  }
}`}
            </pre>
          </div>

          <br />
          <h3>En acción: uso, tests y benchmark</h3>
          <p>
            La imagen siguiente, extraída directamente del{" "}
            <a
              href="https://github.com/femcodersclub/lru-cache-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              repositorio en GitHub
            </a>
            , muestra tres aspectos del proyecto: el comportamiento del caché
            con capacidad para tres elementos (cómo al acceder a un elemento
            pasa al extremo MRU y cómo el LRU se elimina automáticamente al
            insertar uno nuevo), los 15 tests que cubren operaciones básicas,
            política LRU y casos límite, y el benchmark comparando{" "}
            <code>Map</code> frente a <code>Array</code>:
          </p>

          {/* Captura combinada: basic-usage + tests + benchmark */}
          <div style={{ margin: "25px 0" }}>
            <picture>
              <source
                srcSet="/public-optimized/mobile/assets/javascript/lru-cache-proyecto.webp"
                media="(max-width: 768px)"
              />
              <source
                srcSet="/public-optimized/desktop/assets/javascript/lru-cache-proyecto.webp"
                media="(min-width: 769px)"
              />
              <img
                src="/public-optimized/desktop/assets/javascript/lru-cache-proyecto.webp"
                alt="Proyecto LRU Cache en GitHub — demo de uso, 15 tests pasados y benchmark Map vs Array"
                className="blog-post-image"
                loading="lazy"
              />
            </picture>
          </div>

          <p>
            Con 200.000 operaciones sobre un caché de capacidad 1.000,{" "}
            <code>Map</code> es hasta{" "}
            <strong>7 veces más rápido en lecturas</strong> y más de{" "}
            <strong>3 veces más rápido en escrituras</strong> que una
            implementación basada en <code>Array</code>. A pequeña escala no se
            nota. En una aplicación real con cientos de requests por segundo, sí
            importa.
          </p>
          <p>
            El{" "}
            <a
              href="https://github.com/femcodersclub/lru-cache-js"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              proyecto completo en GitHub
            </a>{" "}
            también incluye <code>LRUCacheWithStats</code>, una versión
            extendida que registra el hit ratio, el número de evictions y las
            keys más accedidas, útil para evaluar si el tamaño del caché es el
            adecuado para un caso de uso concreto.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <a
              href="https://github.com/femcodersclub/lru-cache-js"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#2a2170",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <FaGithub />
              Ver el proyecto completo en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Conclusión ── */}
      <section aria-labelledby="conclusions-section">
        <div className="highlight-box">
          <h2 id="conclusions-section">
            <FaLightbulb
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            Conclusión
          </h2>
          <br />
          <p>
            Elegir la estructura correcta no es optimización prematura. Es
            conocer las herramientas que tienes disponibles.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              {
                texto: "Map",
                desc: "cuando las keys no son strings simples o el orden de inserción importa.",
              },
              {
                texto: "Set",
                desc: "cuando necesitas unicidad o harás búsquedas frecuentes.",
              },
              {
                texto: "WeakMap y WeakSet",
                desc: "cuando quieres asociar datos a objetos sin interferir con el ciclo de vida de esos objetos ni preocuparte por fugas de memoria.",
              },
            ].map(({ texto, desc }) => (
              <li key={texto} style={{ marginBottom: "12px" }}>
                <FaCheck
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    color: "var(--color-primary)",
                    verticalAlign: "middle",
                  }}
                />
                <strong>{texto}</strong> — {desc}
              </li>
            ))}
          </ul>

          <div
            style={{
              backgroundColor: "rgba(71, 55, 187, 0.08)",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #4737bb",
              marginTop: "1.5rem",
            }}
          >
            <p style={{ margin: 0, color: "#2a2170" }}>
              <strong>
                <FaExclamationTriangle
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                    color: "#ea4f33",
                    verticalAlign: "middle",
                  }}
                />
                El siguiente post de la serie:
              </strong>{" "}
              <strong>Programación Funcional Profesional</strong> —{" "}
              <code>map</code>, <code>filter</code> y <code>reduce</code> usados
              bien, composición de funciones, currying e inmutabilidad real.
            </p>
          </div>

          <br />
          <p style={{ fontStyle: "italic", color: "#6d2c95" }}>
            ¿Tienes dudas o quieres compartir cómo usas estas estructuras en tus
            proyectos? Únete a la conversación en FemCoders Club, una comunidad
            de más de 1.500 mujeres en tecnología en España.
          </p>
        </div>
      </section>

      {/* ── Recursos Adicionales ── */}
      <section aria-labelledby="resources-section">
        <div className="highlight-box">
          <h2 id="resources-section">
            <FaBook
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-primary)",
                verticalAlign: "middle",
              }}
            />
            Recursos Adicionales
          </h2>
          <br />
          <h3>Para profundizar</h3>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN - Map en JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN - Set en JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                MDN - WeakMap en JavaScript
              </a>
            </li>
            <li>
              <Link
                to="/recursos/js/closures-scope-context"
                className="highlight-link"
              >
                Closures, Scope y Context: Lo que Realmente Pasa en el Motor de
                JavaScript
              </Link>
            </li>
            <li>
              <Link
                to="/recursos/js/event-loop-javascript"
                className="highlight-link"
              >
                Event Loop en JavaScript: Cómo Funciona la Asincronía
              </Link>
            </li>
          </ul>
          <br />
          <h3>Únete a la comunidad</h3>
          <p>
            ¿Tienes dudas sobre estas estructuras de datos o quieres compartir
            tus proyectos? Únete a FemCoders Club, una comunidad de más de
            1.500 mujeres en tecnología donde aprendemos y crecemos juntas.
          </p>
        </div>
      </section>

      {/* ── Mentoría ── */}
      <section aria-labelledby="mentorship-section">
        <div className="highlight-box">
          <h2 id="mentorship-section">
            <FaTools
              style={{
                display: "inline-block",
                marginRight: "10px",
                color: "var(--color-secondary)",
                verticalAlign: "middle",
              }}
            />
            ¿Necesitas Apoyo Personalizado?
          </h2>
          <p>
            Si estas estructuras te resultan desafiantes o quieres profundizar
            más con orientación personalizada, en femCoders Club ofrecemos{" "}
            <Link to="/login" className="highlight-link">
              mentorías individuales
            </Link>{" "}
            donde podemos trabajar juntas en tus dudas específicas.{" "}
            (Requiere{" "}
            <Link to="/register" className="highlight-link">
              registro gratuito
            </Link>
            )
          </p>
        </div>
      </section>

      <div className="author-info">
        <p>
          Escrito por: <strong>femCoders Club</strong>
        </p>
        <p>Comunidad de mujeres en tecnología</p>
        <p>
          Fecha de publicación: <strong>{publicationDate}</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <Link to="/blog" className="back-to-blog">
          Volver al Blog
        </Link>
      </div>

      <CommentsSection postId={postId} />
    </article>
  );
};

export default EstructurasDatosJS;
