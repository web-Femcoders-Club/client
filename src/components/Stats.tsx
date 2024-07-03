import React from "react";
import getPageViewStats from "../utils/getPageViewStats";

const Stats: React.FC = () => {
  const stats = getPageViewStats();

  return (
    <div>
      <h2>Estadísticas de Uso</h2>
      <ul>
        {Object.entries(stats).map(([page, views]) => (
          <li key={page}>
            {page}: {views} visitas
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
