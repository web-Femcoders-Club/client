import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaLinkedin, FaTimes } from "react-icons/fa";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";
import "../../Team/page/CardTeamMember.css";

interface CardTeamMemberProps {
  filter?: "active" | "inactive" | "all";
}

const CardTeamMember: React.FC<CardTeamMemberProps> = ({ filter = "all" }) => {
  const { data, error, isLoading } = useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: getMember,
  });

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [rotationIndex, setRotationIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  // Memoizar función getFilteredMembers para evitar warnings de dependencias
  const getFilteredMembers = useCallback(() => {
    if (!data || !Array.isArray(data)) return [];

    if (filter === "active") {
      return data.filter(member => member.memberRole === "Cofundadora");
    } else if (filter === "inactive") {
      return data.filter(member => member.memberRole === "Cofundadora Legacy");
    }

    return data;
  }, [data, filter]);

  // Orden base de los miembros (consistente)
  const baseMembers = useMemo(() => {
    return getFilteredMembers();
  }, [getFilteredMembers]);

  // Rotación equitativa: cada miembro pasa por todas las posiciones
  const rotatedMembers = useMemo(() => {
    if (baseMembers.length === 0) return [];
    
    // Rotamos el array según el índice de rotación
    const rotated = [...baseMembers];
    const actualRotation = rotationIndex % baseMembers.length;
    
    // Rotar array: mover los primeros 'actualRotation' elementos al final
    return [...rotated.slice(actualRotation), ...rotated.slice(0, actualRotation)];
  }, [baseMembers, rotationIndex]);

  // Auto-rotación cada 30 segundos
  useEffect(() => {
    if (baseMembers.length === 0) return;

    const intervalId = setInterval(() => {
      setRotationIndex(prev => prev + 1);
    }, 30000); // 30 segundos

    return () => clearInterval(intervalId);
  }, [baseMembers.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMember) return;

      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (selectedMember && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const handleToggleExpand = (memberId: number) => {
    setExpandedId(expandedId === memberId ? null : memberId);
  };

  const handleOpenModal = (member: Member) => {
    setSelectedMember(member);
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
  };

  const handleCloseModal = () => {
    setSelectedMember(null);

    if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[30vh]"
        aria-live="polite"
      >
        <span
          className="loading loading-spinner text-primary"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
          aria-label="Cargando miembros del equipo"
        ></span>
        <span className="sr-only">Cargando miembros del equipo</span>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching members:", error);
    return (
      <div aria-live="assertive" role="alert" className="text-center py-4">
        <p>
          Error al cargar los miembros del equipo. Por favor, intente nuevamente
          más tarde.
        </p>
      </div>
    );
  }

  if (rotatedMembers.length === 0) {
    return (
      <div className="text-center py-4">
        <p>No se encontraron miembros del equipo en esta categoría.</p>
      </div>
    );
  }

  return (
    <section
      className={`team-grid ${filter === "inactive" ? "inactive-members" : ""}`}
      aria-label={
        filter === "active" 
          ? "Equipo actual de FemCoders Club" 
          : filter === "inactive"
          ? "Cofundadoras Legacy de FemCoders Club"
          : "Miembros del equipo de FemCoders Club"
      }
    >
      {rotatedMembers.map((member, index) => {
        const isExpanded = expandedId === member.idMember;

        return (
          <article
            key={`${member.idMember}-${rotationIndex}`}
            className={`team-card ${isExpanded ? "expanded" : ""} ${
              filter === "inactive" ? "legacy-card" : ""
            }`}
            style={{ 
              animation: 'crossFadeIn 1s ease-out forwards',
              animationDelay: `${index * 0.12}s`,
              opacity: 0
            }}
          >
            {filter === "inactive" && (
              <span className="legacy-badge">Legacy</span>
            )}

            {/* Contenido siempre visible */}
            <div className="team-card-main">
              <figure className="team-card-avatar">
                <img
                  src={member.memberImage}
                  alt=""
                  loading="lazy"
                  width="120"
                  height="120"
                />
              </figure>

              <div className="team-card-info">
                <h3 className="team-card-name">
                  {member.memberName} {member.memberLastName}
                </h3>
                <p className="team-card-role">{member.memberRole}</p>
              </div>

              <nav className="team-card-actions" aria-label={`Acciones para ${member.memberName}`}>
                <a
                  href={member.memberLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-linkedin-link"
                  aria-label={`Ver perfil de LinkedIn de ${member.memberName} ${member.memberLastName}`}
                >
                  <FaLinkedin aria-hidden="true" />
                </a>

<button
  className="team-expand-btn"
  onClick={() => handleToggleExpand(member.idMember)}
>
  {isExpanded ? "-" : "+"}
</button>


              </nav>
            </div>

            {/* Descripción expandible con scroll */}
            {isExpanded && (
              <div 
                className="team-card-description"
                id={`desc-${member.idMember}`}
                role="region"
                aria-label={`Descripción de ${member.memberName} ${member.memberLastName}`}
              >
                <div className="team-card-description-content">
                  <p>{member.memberDescription}</p>
                </div>
                
                <button
                  className="team-modal-trigger"
                  onClick={() => handleOpenModal(member)}
                  aria-label={`Ver perfil completo de ${member.memberName} ${member.memberLastName}`}
                >
                  Ver perfil completo
                </button>
              </div>
            )}
          </article>
        );
      })}

      {/* MODAL para perfil completo */}
      {selectedMember && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${selectedMember.idMember}`}
          onClick={handleOverlayClick}
        >
          <article className="modal-card" ref={modalRef} tabIndex={-1}>
            <button
              className="modal-close"
              onClick={handleCloseModal}
              aria-label="Cerrar modal"
              ref={closeButtonRef}
            >
              <FaTimes aria-hidden="true" />
            </button>

            <header className="modal-header">
              <figure className="modal-avatar">
                <img
                  src={selectedMember.memberImage}
                  alt=""
                  width="120"
                  height="120"
                />
              </figure>
              
              <h4 className="modal-title" id={`modal-title-${selectedMember.idMember}`}>
                {selectedMember.memberName} {selectedMember.memberLastName}
              </h4>
              
              <p className="modal-role">{selectedMember.memberRole}</p>
            </header>

            <section className="modal-body">
              <p>{selectedMember.memberDescription}</p>
            </section>

            <footer className="modal-footer">
              <a
                href={selectedMember.memberLinkedin}
                className="modal-linkedin-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir perfil de LinkedIn de ${selectedMember.memberName}`}
              >
                <FaLinkedin aria-hidden="true" />
                Ver en LinkedIn
              </a>
            </footer>
          </article>
        </div>
      )}
    </section>
  );
};

export default CardTeamMember;