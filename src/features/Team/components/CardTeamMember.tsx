import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";
import BotonRotacion from "../../Home/components/BotonRotacion";
import "../../Team/page/CardTeamMember.css";

interface CardTeamMemberProps {
  filter?: "active" | "inactive" | "all";
}

const ROTACION_MS = 30000;
const ID_LISTA = "equipo-lista";

/*
 * La descripción llega de la base de datos en párrafos separados por una línea
 * en blanco, y el primero es el oficio («Desarrolladora Web Full Stack…»): va
 * bajo el nombre y el resto en «Leer más». El texto se muestra íntegro. Si no
 * hay párrafos, todo va al desplegable.
 */
const partirDescripcion = (descripcion: string) => {
  const parrafos = descripcion
    .split(/\n\s*\n/)
    .map((parrafo) => parrafo.trim())
    .filter(Boolean);

  if (parrafos.length < 2) return { oficio: null, historia: parrafos };
  return { oficio: parrafos[0], historia: parrafos.slice(1) };
};

const CardTeamMember: React.FC<CardTeamMemberProps> = ({ filter = "all" }) => {
  const { data, error, isLoading } = useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: getMember,
  });

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationIndex, setRotationIndex] = useState(0);
  const [detenida, setDetenida] = useState(false);
  const [ratonEncima, setRatonEncima] = useState(false);
  const [focoDentro, setFocoDentro] = useState(false);

  const getFilteredMembers = useCallback(() => {
    if (!data || !Array.isArray(data)) return [];

    if (filter === "active") {
      return data.filter(member => member.memberRole === "Cofundadora");
    } else if (filter === "inactive") {
      return data.filter(member => member.memberRole === "Cofundadora Legacy");
    }

    return data;
  }, [data, filter]);

  const baseMembers = useMemo(() => getFilteredMembers(), [getFilteredMembers]);

  // Rotación equitativa: cada miembro pasa por todas las posiciones.
  const rotatedMembers = useMemo(() => {
    if (baseMembers.length === 0) return [];
    const actualRotation = rotationIndex % baseMembers.length;
    return [...baseMembers.slice(actualRotation), ...baseMembers.slice(0, actualRotation)];
  }, [baseMembers, rotationIndex]);

  /*
   * La rotación se para mientras alguien lee o actúa sobre las tarjetas (ratón
   * encima, foco del teclado dentro o una historia abierta) y con el botón de
   * pausa, que pide WCAG 2.2.2 para el contenido que cambia solo. Al reanudar,
   * los 30 segundos empiezan de cero.
   */
  const enPausa = detenida || ratonEncima || focoDentro || expandedId !== null;

  useEffect(() => {
    if (baseMembers.length < 2 || enPausa) return;

    const intervalId = setInterval(() => {
      setRotationIndex(prev => prev + 1);
    }, ROTACION_MS);

    return () => clearInterval(intervalId);
  }, [baseMembers.length, enPausa]);

  const handleToggleExpand = (memberId: number) => {
    setExpandedId(expandedId === memberId ? null : memberId);
  };

  const handleBlur = (e: React.FocusEvent<HTMLUListElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocoDentro(false);
  };

  if (isLoading) {
    return (
      <div className="equipo-estado" role="status">
        <div className="equipo-estado__girando" aria-hidden="true" />
        Cargando el equipo…
      </div>
    );
  }

  if (error) {
    console.error("Error fetching members:", error);
    return (
      <div className="equipo-estado" role="alert">
        No hemos podido cargar el equipo. Recarga la página para volver a intentarlo.
      </div>
    );
  }

  if (rotatedMembers.length === 0) {
    return <p className="equipo-estado">Todavía no hay nadie en esta parte del equipo.</p>;
  }

  return (
    <div className="equipo-tarjetas">
      <div className="equipo-tarjetas__barra">
        <span className="fc-chip">
          {rotatedMembers.length} {rotatedMembers.length === 1 ? "cofundadora" : "cofundadoras"}
        </span>
        {rotatedMembers.length > 1 && (
          <BotonRotacion
            girando={!detenida}
            alAlternar={() => setDetenida((valor) => !valor)}
            de="equipo"
            controla={ID_LISTA}
          />
        )}
      </div>

      <ul
        id={ID_LISTA}
        className={`equipo-tarjetas__lista ${filter === "inactive" ? "equipo-tarjetas__lista--legacy" : ""}`}
        aria-label={
          filter === "active"
            ? "Equipo actual de FemCoders Club"
            : filter === "inactive"
            ? "Cofundadoras Legacy de FemCoders Club"
            : "Miembros del equipo de FemCoders Club"
        }
        onMouseEnter={() => setRatonEncima(true)}
        onMouseLeave={() => setRatonEncima(false)}
        onFocus={() => setFocoDentro(true)}
        onBlur={handleBlur}
      >
        {rotatedMembers.map((member, index) => {
          const isExpanded = expandedId === member.idMember;
          const nombre = `${member.memberName} ${member.memberLastName}`;
          const idHistoria = `historia-${member.idMember}`;
          const { oficio, historia } = partirDescripcion(member.memberDescription);

          return (
            <li
              // La clave cambia con la rotación para que la tarjeta vuelva a entrar animada.
              key={`${member.idMember}-${rotationIndex}`}
              className="equipo-tarjeta fc-tarjeta"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {filter === "inactive" && <p className="equipo-tarjeta__legacy">Legacy</p>}

              {/* El archivo de la foto ya trae el disco blanco y su sombra. */}
              <img
                className="equipo-tarjeta__foto"
                src={member.memberImage}
                alt=""
                loading="lazy"
                width="152"
                height="152"
              />
              <h3 className="equipo-tarjeta__nombre">{nombre}</h3>
              <span className="fc-chip fc-chip--naranja">{member.memberRole}</span>
              {oficio && <p className="equipo-tarjeta__oficio">{oficio}</p>}

              <div className="equipo-tarjeta__acciones">
                {historia.length > 0 && (
                  <button
                    type="button"
                    className="equipo-tarjeta__mas"
                    aria-expanded={isExpanded}
                    aria-controls={idHistoria}
                    onClick={() => handleToggleExpand(member.idMember)}
                  >
                    Leer más sobre {member.memberName}
                    <ChevronDown aria-hidden="true" />
                  </button>
                )}
                <a
                  href={member.memberLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fc-boton-redondo"
                >
                  <FaLinkedin aria-hidden="true" />
                  <span className="fc-solo-lector">
                    LinkedIn de {nombre} (se abre en una pestaña nueva)
                  </span>
                </a>
              </div>

              <div className="equipo-tarjeta__historia" id={idHistoria} hidden={!isExpanded}>
                {historia.map((parrafo) => (
                  <p key={parrafo}>{parrafo}</p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardTeamMember;
