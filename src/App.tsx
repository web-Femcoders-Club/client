import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ModalProvider } from "./context/ModalContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false, // Hace que las animaciones se repitan cada vez que haces scroll
      mirror: true // Anima elementos al salir del viewport también
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
