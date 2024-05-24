import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from '../features/Home/page/HomePage'
import ContactPage from "../features/Contact/page/ContactPage";
import AboutPage from "../features/About/page/AboutPage";
import EventsPage from "../features/Events/page/EventsPage";
import FaqsPage from "../features/Faqs/page/FaqsPage";


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/sobrenosotras" element={<AboutPage />} />
        <Route path="/faqs" element={<FaqsPage />} />

    </Routes>
</BrowserRouter>
  )
}

export default Router