import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { ModalProvider } from './context/ModalContext';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ModalProvider>
                <Router />
            </ModalProvider>
        </QueryClientProvider>
    );
}

export default App;






