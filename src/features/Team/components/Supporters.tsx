import "../components/Supporters"; 

const Supporters = () => {
  const supporters = [
    {
      name: "Empresa A",
      logo: "/logos/empresaA.png",
      description: "Descripción de la Empresa A.",
      website: "https://empresaA.com",
    },
    {
      name: "Empresa B",
      logo: "/logos/empresaB.png",
      description: "Descripción de la Empresa B.",
      website: "https://empresaB.com",
    },
    
  ];

  return (
    <div className="supporters-container">
      {supporters.map((supporter, index) => (
        <div key={index} className="supporter-card">
          <img src={supporter.logo} alt={`${supporter.name} logo`} className="supporter-logo" />
          <h3 className="supporter-name">{supporter.name}</h3>
          <p className="supporter-description">{supporter.description}</p>
          <a href={supporter.website} target="_blank" rel="noopener noreferrer" className="supporter-website">
            Visitar sitio web
          </a>
        </div>
      ))}
    </div>
  );
};

export default Supporters;
