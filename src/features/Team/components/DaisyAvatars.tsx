import "../page/DaisyAvatars.css"; 

const linkedinProfiles = [
  { url: "https://www.linkedin.com/in/disofiareynoso/", name: "Sofia Reynoso", img: "/sofi.jpeg" },
  { url: "https://www.linkedin.com/in/belen-alonso-peral/", name: "Belen Alonso Peral", img: "/Belen.jpeg" },
  { url: "https://www.linkedin.com/in/josealbertoperezrego/", name: "Jose Alberto Perez Rego", img: "/Jose.jpeg" },
  { url: "https://www.linkedin.com/in/ruth-daniela-aguirre/", name: "Ruth Daniela Aguirre", img: "/Daniela.jpeg" },
  { url: "https://www.linkedin.com/in/ana-maria-hg/", name: "Ana Maria HG", img: "/AnaMaria.jpeg" },
  { url: "https://www.linkedin.com/in/karyoli-nieves/", name: "Karyoli Nieves", img: "/Karyoly.jpeg" },
];

const DaisyAvatars = () => {
  return (
    <div className="daisy-avatars">
      {linkedinProfiles.map((profile, index) => (
        <div key={index} className="avatar">
          <div className="w-24 rounded-full">
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              <img
                src={profile.img}
                alt={`LinkedIn profile of ${profile.name}`}
              />
            </a>
          </div>
          <p className="avatar-name">{profile.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DaisyAvatars;


