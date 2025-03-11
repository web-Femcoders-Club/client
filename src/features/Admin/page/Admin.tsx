import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route, Routes } from 'react-router-dom';
import ManageComments from '../components/comment/ManageComments';
import './Admin.css';

const Admin: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Panel de Administración - FemCoders Club</title>
        <meta name="description" content="Panel de administración para gestionar la comunidad FemCoders Club." />
      </Helmet>
      <div className="admin-container">
        <div className="admin-header">
          <h1>Bienvenida, Irina</h1>
          <h2>Panel de Administración</h2>
          <p>Aquí puedes gestionar miembros, patrocinadores, voluntarios y comentarios.</p>
        </div>
        <div className="admin-content flex">
          <div className="admin-sidebar w-1/4 p-4">
            <ul className="steps steps-vertical">
              <li className="step">
                <Link to="/admin/members" className="text-decoration-none">
                  1. Gestionar Miembros
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/sponsors" className="text-decoration-none">
                  2. Gestionar Patrocinadores
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/volunteers" className="text-decoration-none">
                  3. Gestionar Voluntarios
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/comments" className="text-decoration-none">
                  4. Gestionar Comentarios
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/settings" className="text-decoration-none">
                  5. Otros Ajustes
                </Link>
              </li>
              <li className="step">
                <Link to="/admin/achievements" className="text-decoration-none">
                  5. Logros Usuarios
                </Link>
              </li>
            </ul>
          </div>
          <div className="admin-main w-3/4 p-4">
            <Routes>
              <Route path="comments" element={<ManageComments />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;







