import OptimizedImage from "../../../components/OptimizedImage";

const EventHighlight = () => {
  return (
    <div
      className="my-12 p-8 rounded-xl shadow-lg border-l-4 border-[#EA4F33]"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        background:
          "linear-gradient(135deg, rgba(71, 55, 187, 0.05) 0%, rgba(234, 79, 51, 0.1) 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <OptimizedImage
            src="assets/joboffers/DataConnect.webp"
            alt="DataConnect: Evento de Big Data y Análisis de Datos"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>

        <div className="md:w-3/4 md:pl-8">
          <div className="flex items-center mb-2">
            <span className="bg1 text-xs font-bold px-3 py-1 rounded-full mr-3">
              EVENTO DESTACADO
            </span>
            <span className="text-sm font-medium text-[#4737BB]">
              Miércoles, 28 de mayo - 18:00h
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#4737BB]">
            DataConnect: Inspire ideas. Learn from experts. Grow together!
          </h2>

          <p className="text-lg mb-4" style={{ color: "#2a2170" }}>
            Un evento único para <strong>inspirarte</strong>,{" "}
            <strong>aprender</strong> de profesionales del mundo data y{" "}
            <strong>conectar</strong> con otros perfiles tech.
          </p>

          <div className="bg1 p-4 rounded-lg shadow-inner mb-4">
            <h3 className="font-semibold mb-2 text-[#EA4F33]">
              ¿Qué encontrarás?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="mr-2 text-[#4737BB]">✓</span> Conferencias con
                expertos de InfoJobs, Glovo y Le Wagon
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#4737BB]">✓</span> Empresas con
                compromiso por el talento diverso
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#4737BB]">✓</span> Networking
                profesional con DJ Live Coding
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#4737BB]">✓</span> Ubicación:
                InfoJobs (C/ Ciutat de Granada, 150)
              </li>
            </ul>
          </div>

          <div className="bg-[#4737BB] bg-opacity-10 p-3 rounded-lg mb-4">
            <p className="font-medium flex items-center">
              <span className="text-[#EA4F33] mr-2">💡</span>
              <span>
                Recuerda tener tu CV actualizado en tu dispositivo para
                aprovechar posibles oportunidades de contacto directo
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.eventbrite.es/e/entradas-dataconnect-inspire-ideaslearn-from-experts-grow-together-1351889270199?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg2 hover:bg-opacity-90 transition-all shadow-md"
            >
              <span className="mr-2">🎟️</span> Reserva tu plaza gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHighlight;
