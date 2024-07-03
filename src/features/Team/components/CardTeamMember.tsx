import { useQuery } from "@tanstack/react-query";
import { FaLinkedin, FaUser } from "react-icons/fa";
import { PiFileMagnifyingGlassBold } from "react-icons/pi";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";
import "../../Team/page/CardTeamMember.css"; 

const CardTeamMember = () => {
  const { data, error } = useQuery<Member[]>({
    queryKey: ['members'],
    queryFn: getMember
  });

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleClick = (member: Member) => {
    setSelectedMember(member); 
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  if (error) {
    console.error("Error fetching members:", error);
    return <p>Error loading members</p>;
  }

  return (
    <div className="card-team-member-container">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((member) => (
          <div key={member.idMember} className="card-team-member">
            <div className="card-team-member-content">
              <div className="card-team-member-image">
                <img src={member.memberImage} alt="member image" className="member-image" />
              </div>
              <div className="card-team-member-details">
                <h5 className="card-team-member-title"><FaUser className="icon" />{member.memberName} {member.memberLastName}</h5>
                <p className="card-team-member-role"><HiUserGroup className="icon" />{member.memberRole}</p>
                <p className="card-team-member-linkedin"><FaLinkedin className="icon" />{member.memberLinkedin.slice(0, 20)}...</p>
                <p className="card-team-member-description"><PiFileMagnifyingGlassBold className="icon" /><strong>{member.memberDescription.slice(0, 52)}...</strong></p>
              </div>
            </div>
            <button className="secondary-button" onClick={() => handleClick(member)}>Ver más</button>
          </div>
        ))
      ) : (
        <p>No members found.</p>
      )}
      {selectedMember && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <img src={selectedMember.memberImage} alt="member image" className="modal-image" />
              <h5 className="modal-title">{selectedMember.memberName} {selectedMember.memberLastName}</h5>
              <p className="modal-role">| {selectedMember.memberRole} |</p>
              <a href={selectedMember.memberLinkedin} className="modal-linkedin">{selectedMember.memberLinkedin}</a>
            </div>
            <div className="modal-body">
              <p>{selectedMember.memberDescription}</p>
            </div>
            <div className="modal-footer">
              <button className="primary-button" onClick={handleCloseModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTeamMember;


