import { Link } from "react-router-dom";

const ApoyanosButton = () => {
  return (
    <div className="flex justify-center items-center md:items-end flex-col w-full">
      <Link to="/contacto">
        <div className="w-full">
          <button
            type="button"
            aria-label="ApoyanosBtn"
            className="tertiary-button"
          >
            Contacto
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ApoyanosButton;
