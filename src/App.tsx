import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ModalProvider } from "./context/ModalContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    /*
     * `once: false` + `mirror: true` significa que cada elemento se reanima al
     * entrar Y al salir de la pantalla, en cada scroll y sin final. Para quien
     * tiene trastorno vestibular o migraña con aura eso no es un adorno: es lo
     * que le obliga a cerrar la página.
     *
     * Quien lo necesita ya lo ha dicho en su sistema operativo, así que no hace
     * falta un interruptor propio en la web: se le pregunta al navegador. AOS
     * acepta `disable`, y con él los elementos se quedan en su estado final
     * visible en lugar de esperar a una animación que no va a llegar.
     */
    const prefiereMenosMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false, // Hace que las animaciones se repitan cada vez que haces scroll
      mirror: true, // Anima elementos al salir del viewport también
      disable: prefiereMenosMovimiento
    });

    // Tu código existente para el menú contextual
    const handleContextMenu = (event: MouseEvent) => {
      if ((event.target as HTMLElement).tagName === "IMG") {
        event.preventDefault();
      }
    };
    
    document.addEventListener("contextmenu", handleContextMenu);
    
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Router />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
