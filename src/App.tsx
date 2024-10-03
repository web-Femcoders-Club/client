import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ModalProvider } from "./context/ModalContext";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
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
