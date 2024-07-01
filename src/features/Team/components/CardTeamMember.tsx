import { useQuery } from "@tanstack/react-query";
import { getMember } from "../../../api/memberApi";
import { Member } from "../../../types/types";

const CardTeamMember = () => {
  const { data, error, isLoading } = useQuery<Member[]>({
    queryKey: ['members'],
    queryFn: getMember
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading members</div>;
  }

  if (!Array.isArray(data)) {
    return <div>No members found</div>;
  }

  return (
    <div>
      {data.map((member) => (
        <div key={member.idMember}>
          <h3>{member.memberName} {member.memberLastName}</h3>
          <p>{member.memberRole}</p>
          <img src={member.memberImage} alt={`${member.memberName} ${member.memberLastName}`} />
          <a href={member.memberLinkedin}>LinkedIn</a>
        </div>
      ))}
    </div>
  );
};

export default CardTeamMember;



