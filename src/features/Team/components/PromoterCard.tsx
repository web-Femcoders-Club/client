
import "../page/PromoterCard.css"; // Asegúrate de crear este archivo CSS para los estilos del componente

const PromoterCard = () => {
  return (
    <div className="promoter-card">
      <img
        src="URL_DE_LA_IMAGEN_DE_LA_PROMOTORA"
        alt="Promotora"
        className="promoter-image"
      />
      <h3 className="promoter-name">Nombre de la Promotora</h3>
      <p className="promoter-role">Promotora y Fotógrafa</p>
      <p className="promoter-description">
        Agradecemos enormemente a [Nombre de la Promotora] por su incansable
        apoyo y dedicación en cada uno de nuestros eventos. Su talento y
        compromiso han sido fundamentales para nuestro éxito.
      </p>
    </div>
  );
};

export default PromoterCard;
