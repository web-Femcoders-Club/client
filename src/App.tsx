import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ModalProvider } from "./context/ModalContext";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    /*
     * Las animaciones al entrar en pantalla (los atributos data-aos) ya no usan
     * la librería AOS: las hace CSS ligado al scroll (rediseno.css), sin
     * JavaScript, y con «reducir movimiento» no se mueven.
     */

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
