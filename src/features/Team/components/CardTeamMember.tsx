import { useQuery } from "@tanstack/react-query";
import { FaLinkedin, FaTimes } from "react-icons/fa";
import { PiFileMagnifyingGlassBold } from "react-icons/pi";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";
import { HiUserGroup } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import "../../Team/page/CardTeamMember.css";

interface CardTeamMemberProps {
  filter?: "active" | "inactive" | "all";
}

const CardTeamMember: React.FC<CardTeamMemberProps> = ({ filter = "all" }) => {
  const { data, error, isLoading } = useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: getMember,
  });

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const getFilteredMembers = () => {
    if (!data || !Array.isArray(data)) return [];

    if (filter === "active") {
      return data.slice(0, 4);
    } else if (filter === "inactive") {
      // Los últimos 3 miembros como inactivos
      return data.slice(4);
    }

    return data;
  };

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

  const handleClick = (member: Member) => {
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

  const filteredMembers = getFilteredMembers();

  if (filteredMembers.length === 0) {
    return (
      <div className="text-center py-4">
        <p>No se encontraron miembros del equipo en esta categoría.</p>
      </div>
    );
  }

  return (
    <div
      className={`card-team-member-container ${
        filter === "inactive" ? "inactive-members" : ""
      }`}
    >
      {filteredMembers.map((member) => {
        const isExpanded = selectedMember?.idMember === member.idMember;

        return (
          <div
            key={member.idMember}
            className={`card-team-member ${
              filter === "inactive" ? "inactive-card" : ""
            }`}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            <div className="card-team-member-content">
              <div className="card-team-member-image">
                <img
                  src={member.memberImage}
                  alt={`${member.memberName} ${member.memberLastName}, ${member.memberRole}`}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>

              <div className="card-team-member-details">
                <h3 className="card-team-member-title">
                  {member.memberName} {member.memberLastName}
                </h3>

                <div className="info-block">
                  <HiUserGroup className="team-icon" aria-hidden="true" />
                  <span className="info-content role">{member.memberRole}</span>
                </div>

                <div className="info-block linkedin-block">
                  <a
                    href={member.memberLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon-link"
                    aria-label={`LinkedIn de ${member.memberName} ${member.memberLastName}`}
                  >
                    <FaLinkedin className="linkedin-icon" aria-hidden="true" />
                    <span className="linkedin-text">LinkedIn</span>
                  </a>
                </div>

                <div className="info-block">
                  <PiFileMagnifyingGlassBold
                    className="team-icon"
                    aria-hidden="true"
                  />
                  <span className="info-content">
                    <strong>{member.memberDescription.slice(0, 60)}...</strong>
                  </span>
                </div>
              </div>
            </div>

            {isExpanded ? (
              <button
                className="secondary-button-team"
                onClick={() => handleClick(member)}
                aria-expanded="true"
                aria-controls={`modal-${member.idMember}`}
              >
                Ver más
              </button>
            ) : (
              <button
                className="secondary-button-team"
                onClick={() => handleClick(member)}
                aria-expanded="false"
                aria-controls={`modal-${member.idMember}`}
              >
                Ver más
              </button>
            )}

            {filter === "inactive" && (
              <div className="inactive-badge" aria-label="Cofundadora Emerita">
                Legacy
              </div>
            )}
          </div>
        );
      })}

      {selectedMember && (
        <div
          className="modal-overlay-non-blocking"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${selectedMember.idMember}`}
          id={`modal-${selectedMember.idMember}`}
          onClick={handleOverlayClick}
        >
          <div
            className="modal-content-non-blocking"
            ref={modalRef}
            tabIndex={-1}
          >
            <button
              className="modal-close-button"
              onClick={handleCloseModal}
              aria-label="Cerrar ventana"
              ref={closeButtonRef}
            >
              <FaTimes className="modal-close-icon" aria-hidden="true" />
            </button>

            <div className="modal-header-team">
              <img
                src={selectedMember.memberImage}
                alt={`${selectedMember.memberName} ${selectedMember.memberLastName}`}
                className="modal-image"
                width="130"
                height="130"
              />
              <h4
                className="modal-title-team"
                id={`modal-title-${selectedMember.idMember}`}
              >
                {selectedMember.memberName} {selectedMember.memberLastName}
              </h4>
              <p className="modal-role">{selectedMember.memberRole}</p>

              <a
                href={selectedMember.memberLinkedin}
                className="modal-linkedin-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${selectedMember.memberName} ${selectedMember.memberLastName}`}
              >
                <FaLinkedin
                  className="modal-linkedin-icon"
                  aria-hidden="true"
                />
                <span>Perfil de LinkedIn</span>
              </a>
            </div>
            <div className="modal-body-team">
              <p>{selectedMember.memberDescription}</p>
            </div>
            <div className="modal-footer-team">
              <button
                className="button-card"
                onClick={handleCloseModal}
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTeamMember;
