import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from '../features/Home/page/HomePage';
import ContactPage from "../features/Contact/page/ContactPage";
//import LogInPage from "../features/LogIn/page/LogInPage";
//import SignUpPage from "../features/SignUp/page/SignUpPage";
import AboutPage from "../features/About/page/AboutPage";
import EventsPage from "../features/Events/page/EventsPage";
import FaqsPage from "../features/Faqs/page/FaqsPage";
//import TeamPage from "../features/Team/page/TeamPage";
//import UserPage from "../features/User/page/UserPage";
//import AdminPage from "../features/Admin/page/AdminPage";




const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/sobrenosotras" element={<AboutPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
       
       
        {/* <Route path="/equipo" element={<TeamPage />} />
<Route path="/usuario" element={<UserPage />} />
<Route path="/admin" element={<AdminPage />} />
<Route path="/login" element={<LogInPage />} />
<Route path="/signup" element={<SignUpPage />} /> */}
    </Routes>
</BrowserRouter>
  )
}

export default Router;

