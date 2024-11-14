import React, { useState } from "react";
import "../page/PostStyles.css";

const Buscar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div className="buscar">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
        className="buscar-input"
      />
    </div>
  );
};

export default Buscar;


