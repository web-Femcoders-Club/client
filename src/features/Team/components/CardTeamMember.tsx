import { useQuery } from "@tanstack/react-query";
import { FaLinkedin, FaUser } from "react-icons/fa";
import { PiFileMagnifyingGlassBold } from "react-icons/pi";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";
import "../../Team/page/CardTeamMember.css";

const CardTeamMember = () => {
  const { data } = useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: getMember,
  });

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleClick = (member: Member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="card-team-member-container">
      {data?.map((member) => (
        <div key={member.idMember} className="card-team-member">
          <div className="card-team-member-content">
            <div className="card-team-member-image">
              <img
                src={member.memberImage}
                alt="member image"
                className="member-image"
              />
            </div>
            <div className="card-team-member-details">
              <h5 className="card-team-member-title">
                <FaUser className="icon" />
                {member.memberName} {member.memberLastName}
              </h5>
              <p className="card-team-member-role">
                <HiUserGroup className="icon" />
                {member.memberRole}
              </p>
              <p
                className="card-team-member-linkedin"
                title={member.memberLinkedin}
              >
                <FaLinkedin className="icon" />
                <a
                  href={member.memberLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-url"
                >
                  {member.memberLinkedin}
                </a>
              </p>
              <p className="card-team-member-description">
                <PiFileMagnifyingGlassBold className="icon" />
                <strong>{member.memberDescription.slice(0, 52)}...</strong>
              </p>
            </div>
          </div>
          <button className="button-card" onClick={() => handleClick(member)}>
            Ver más
          </button>
        </div>
      ))}
      {selectedMember && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={selectedMember.memberImage}
                alt="member image"
                className="modal-image"
              />
              <h5 className="modal-title">
                {selectedMember.memberName} {selectedMember.memberLastName}
              </h5>
              <p className="modal-role">| {selectedMember.memberRole} |</p>
              <a
                href={selectedMember.memberLinkedin}
                className="modal-linkedin"
              >
                {selectedMember.memberLinkedin}
              </a>
            </div>
            <div className="modal-body">
              <p>{selectedMember.memberDescription}</p>
            </div>
            <div className="modal-footer">
              <button className="primary-button" onClick={handleCloseModal}>
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
