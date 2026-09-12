import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  Award,
  BarChart3,
  FileText,
  Lightbulb,
  Mail,
  MailX,
  MessageSquare,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';
import CollapsibleSidebar from '../../../components/ui/CollapsibleSidebar';
import ManageComments from '../components/comment/ManageComments';
import UserStats from '../components/user/UserStats';
import ManageUsers from '../components/user/ManageUsers';
import CrmDashboard from '../components/crm/CrmDashboard';
import UnsubscribeList from '../components/unsubscribe/UnsubscribeList';
import ConsentOverview from '../components/consent/ConsentOverview';
import LegalDocs from '../components/legal/LegalDocs';
import ManageAchievements from '../../Achievements/page/ManageAchievements';
import ListasDeCorreo from '../components/contactos/ListasDeCorreo';
import InteresEnApisPanel from '../components/interes/InteresEnApisPanel';
import ResumenPanel from '../components/resumen/ResumenPanel';
import '../admin-ui.css';
import './Admin.css';

/*
 * Cada sección lleva icono porque el menú contraído deja solo la franja de
 * iconos (client#59): el texto se oculta a la vista pero sigue en el árbol de
 * accesibilidad, así que un lector de pantalla lo anuncia entero. El `title` es
 * para quien navega con ratón y solo ve el dibujo.
 */
const SECCIONES = [
  { to: '/admin/stats', texto: '1. Estadísticas Usuarias', Icono: BarChart3 },
  { to: '/admin/users', texto: '2. Gestionar Usuarias', Icono: Users },
  { to: '/admin/comments', texto: '3. Gestionar Comentarios', Icono: MessageSquare },
  { to: '/admin/crm', texto: '4. CRM Asistentes', Icono: UserCheck },
  { to: '/admin/achievements', texto: '5. Gestionar Logros', Icono: Award },
  { to: '/admin/listas', texto: '6. Listas de Correo', Icono: Mail },
  { to: '/admin/proyecto-vonage', texto: '7. Proyecto Vonage', Icono: Lightbulb },
];

/*
 * Lo relacionado con datos personales va agrupado y no numerado entre las
 * tareas operativas: son consultas que se hacen ante una petición de derechos o
 * una inspección, no pasos de un flujo.
 */
const CUMPLIMIENTO = [
  { to: '/admin/unsubscribed', texto: 'Bajas de email', Icono: MailX },
  { to: '/admin/consents', texto: 'Consentimientos', Icono: ShieldCheck },
  { to: '/admin/legal', texto: 'Documentación legal', Icono: FileText },
];

const Admin: React.FC = () => {
  const userName = sessionStorage.getItem('userName') || 'Administradora';
  return (
    <>
      <Helmet>
        <title>Panel de Administración - FemCoders Club</title>
        <meta name="description" content="Panel de administración para gestionar la comunidad FemCoders Club." />
      </Helmet>
      <div className="admin-container">
        <div className="admin-header">
          <h1>Bienvenida, {userName}</h1>
          <h2>Panel de Administración</h2>
          <p>Aquí puedes gestionar miembros, patrocinadores, voluntarios y comentarios.</p>
        </div>
        <div className="admin-content">
          <CollapsibleSidebar
            storageKey="femcoders:menu-panel"
            label="menú del panel"
            title="Secciones"
          >
            {/*
              La lista de secciones necesita su propio `nav` con nombre: era un
              `<ul>` suelto, mientras que el bloque de Cumplimiento de más abajo
              ya lo hacía bien y sirve de modelo (client#59).
            */}
            <nav aria-label="Secciones del panel">
              <ul className="steps steps-vertical">
                {SECCIONES.map(({ to, texto, Icono }) => (
                  <li key={to} className="step">
                    <NavLink
                      to={to}
                      className="admin-sidebar__enlace admin-focus"
                      title={texto}
                    >
                      <Icono className="admin-sidebar__icono" aria-hidden="true" />
                      <span className="fem-sidebar__label">{texto}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="admin-cumplimiento" aria-labelledby="cumplimiento-titulo">
              <h3
                id="cumplimiento-titulo"
                className="admin-cumplimiento__titulo fem-sidebar__label"
              >
                Cumplimiento y datos
              </h3>
              <ul className="admin-cumplimiento__lista">
                {CUMPLIMIENTO.map(({ to, texto, Icono }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="admin-sidebar__enlace admin-focus"
                      title={texto}
                    >
                      <Icono className="admin-sidebar__icono" aria-hidden="true" />
                      <span className="fem-sidebar__label">{texto}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </CollapsibleSidebar>
          <div className="admin-main p-4">
            <Routes>
              {/*
                Sin esta ruta, entrar en /admin no casaba con ninguna y el área
                de trabajo se quedaba en blanco: no era un fallo de estilos,
                era que no había nada que renderizar.
              */}
              <Route index element={<ResumenPanel />} />
              <Route path="stats" element={<UserStats />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="comments" element={<ManageComments />} />
              <Route path="crm/*" element={<CrmDashboard />} />
              <Route path="achievements" element={<ManageAchievements />} />
              <Route path="listas" element={<ListasDeCorreo />} />
              <Route path="proyecto-vonage" element={<InteresEnApisPanel />} />
              <Route path="unsubscribed" element={<UnsubscribeList />} />
              <Route path="consents" element={<ConsentOverview />} />
              <Route path="legal" element={<LegalDocs />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;







