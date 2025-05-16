import "./FemSpinner.css";

function FemSpinner() {
  return (
    <div className="fem-spinner-container">
      <div className="fem-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-text">FemCoders</div>
      </div>
      <p className="spinner-message">Cargando eventos inspiradores...</p>
    </div>
  );
}

export default FemSpinner;
