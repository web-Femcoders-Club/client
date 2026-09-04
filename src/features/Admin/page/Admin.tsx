import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route, Routes } from 'react-router-dom';
import ManageComments from '../components/comment/ManageComments';
import UserStats from '../components/user/UserStats';
import ManageUsers from '../components/user/ManageUsers';
import CrmDashboard from '../components/crm/CrmDashboard';
import UnsubscribeList from '../components/unsubscribe/UnsubscribeList';
import ConsentOverview from '../components/consent/ConsentOverview';
import LegalDocs from '../components/legal/LegalDocs';
import ManageAchievements from '../../Achievements/page/ManageAchievements';
import '../admin-ui.css';
import './Admin.css';

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
        <div className="admin-content flex">
          <div className="admin-sidebar w-1/4 p-4">
            <ul className="steps steps-vertical">
              <li className="step">
                <Link to="/admin/stats" className="text-decoration-none">
                  1. Estadísticas Usuarias
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/users" className="text-decoration-none">
                  2. Gestionar Usuarias
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/comments" className="text-decoration-none">
                  3. Gestionar Comentarios
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/crm" className="text-decoration-none">
                  4. CRM Asistentes
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/achievements" className="text-decoration-none">
                  5. Gestionar Logros
                </Link>
              </li>
            </ul>

            {/*
              Lo relacionado con datos personales va agrupado y no numerado
              entre las tareas operativas: son consultas que se hacen ante una
              petición de derechos o una inspección, no pasos de un flujo.
            */}
            <nav className="admin-cumplimiento" aria-labelledby="cumplimiento-titulo">
              <h3 id="cumplimiento-titulo" className="admin-cumplimiento__titulo">
                Cumplimiento y datos
              </h3>
              <ul className="admin-cumplimiento__lista">
                <li>
                  <Link to="/admin/unsubscribed">Bajas de email</Link>
                </li>
                <li>
                  <Link to="/admin/consents">Consentimientos</Link>
                </li>
                <li>
                  <Link to="/admin/legal">Documentación legal</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="admin-main w-3/4 p-4">
            <Routes>
              <Route path="stats" element={<UserStats />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="comments" element={<ManageComments />} />
              <Route path="crm/*" element={<CrmDashboard />} />
              <Route path="achievements" element={<ManageAchievements />} />
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







