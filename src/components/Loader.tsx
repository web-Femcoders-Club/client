import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );
};

export default Loader;