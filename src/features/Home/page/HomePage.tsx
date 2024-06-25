import { useState, useEffect, FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';
import Layout from "../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../Contact/components/ConfirmationModal";
import "./Home.css";

const HomePage: React.FC = () => {
  const images = [
    "/doscomunidadestech.jpeg",
    "/comunidadfem.JPG",
    "/eventoAntesMuerta.jpg",
    "/comoesunevento.jpeg",
    "/evento8Marzo1.jpg",
    "/eventoCriteo.jpg",
    "/cordialidadCriteo.JPG",
    "/eventocomunidad.jpg",
    "/eventoData.jpg",
    "/eventocomunidadfemcodersclub.JPG",
    "/eventoGlovo.jpg",
    "/eventoFactoria1.jpg",
    "/iniciofemCoders.jpg",
    "/eventoFactoria2.jpg",
    "/eventoFactoria3.jpg",
    "/femcodersclubpresentacion.jpeg",
  ];

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => {
      clearInterval(photoInterval);
    };
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) {
      throw new Error("The form element is not found");
    }

    const formData = new FormData(form.current);

    const serviceId = import.meta.env.VITE_API_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_API_EMAILJS_KEY;

    const templateParams = {
      to_email: "info@femcodersclub.com",
      userName: formData.get('name'),
      userLastName: formData.get('last-name'),
      userEmail: formData.get('email'),
      message: formData.get('message'),
    };

    emailjs.send(serviceId, templateId, templateParams, apiKey)
      .then(result => {
        console.log(result.text);
        setShowMessage(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <section className="parallax bg1 full-height">
        <div className="content-container">
          <div className="text-content">
            <h1 className="styled-heading">
              <span className="highlight">Juntas,</span>
              <br />
              potenciamos el <br />
              crecimiento y liderazgo <br />
              de las mujeres tech.
              <svg
                className="curved-line"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 50 0 100 10"
                  stroke="#EA4F33"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </h1>
            <br />
            <p className="styled-subheading">
              Si compartes nuestra pasión por la tecnología
              <br />
              ¡Únete a nosotras!
            </p>
            <div className="button-container">
              <Link to="/signup">
                <button className="accent-button">Unirse al club</button>
              </Link>
              <Link to="/eventos">
                <button className="secondary-button">Ver eventos</button>
              </Link>
            </div>
          </div>
          <div className="image-content">
            <div className="photo-stack">
              <img
                src="/portada1.jpg"
                alt="Foto 1"
                className={`photo ${
                  currentPhotoIndex === 0 ? "photo-1" : "photo-2"
                }`}
                title="Foto 1"
              />
              <img
                src="/portada4.jpeg"
                alt="Foto 2"
                className={`photo ${
                  currentPhotoIndex === 1 ? "photo-1" : "photo-2"
                }`}
                title="Foto 2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="parallax bg2">
        <div className="carousel-container">
          <h2 className="carousel-heading">Galería eventos femCoders Club</h2>
          <div className="carousel">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === carouselIndex ? "active" : ""
                }`}
              >
                <img src={image} alt={`Evento ${index + 1}`} />
              </div>
            ))}
            <button className="carousel-control prev" onClick={prevSlide}>
              ❮
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      </section>

      <section className="parallax bg3">
        <div className="section-countdown">
          <div className="countdown-content">
            <h2>Faltan:</h2>
            <div className="countdown">
              <div className="countdown-item">
                <span>{timeLeft.days}</span> días
              </div>
              <div className="countdown-item">
                <span>{timeLeft.hours}</span> horas
              </div>
              <div className="countdown-item">
                <span>{timeLeft.minutes}</span> minutos
              </div>
              <div className="countdown-item">
                <span>{timeLeft.seconds}</span> segundos
              </div>
            </div>
            <h3 className="countdown-text">para nuestro próximo evento</h3>
          </div>
          <div className="event-card">
            <img src="/eventoCriteo.jpg" alt="Próximo evento" />
            <button className="accent-button">Más información</button>
          </div>
        </div>
      </section>

      <section className="parallax bg4">
        <div className="content-container section-4">
          <div className="text-content">
            <h2>Conócenos</h2>
            <p>
              Somos un vibrante equipo de mujeres apasionadas por la tecnología
              y el desarrollo web.
              <br />
              En FemCoders Club, nos dedicamos a crear un espacio seguro y
              enriquecedor donde mujeres tecnólogas pueden reunirse, colaborar y
              crecer juntas.
              <br />
              Creemos firmemente en el poder de la diversidad y la fuerza
              colectiva para superar barreras y lograr un impacto significativo
              en la industria tecnológica.
            </p>
          </div>
          <div className="form-and-photos">
            <div className="form-container">
              <div className="form-card">
                <img
                  src="/FemCodersClubLogo.png"
                  alt="FemCoders Club Logo"
                  className="form-logo"
                />
                <form ref={form} onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Nombre" />
                  <input type="text" name="last-name" placeholder="Apellidos" />
                  <input type="email" name="email" placeholder="Email" />
                  <textarea name="message" placeholder="Mensaje"></textarea>
                  <button type="submit" className="accent-button">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="image-content">
              <div className="photo-stack section-4-photo-stack">
                <img
                  src="/portada6.jpg"
                  alt="Foto 3"
                  className="photo photo-1"
                />
                <img
                  src="/portada5.jpeg"
                  alt="Foto 4"
                  className="photo photo-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConfirmationModal isVisible={showMessage} onClose={() => setShowMessage(false)} />
    </Layout>
  );
};

export default HomePage;


